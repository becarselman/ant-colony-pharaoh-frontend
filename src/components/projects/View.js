import React, {useEffect, useRef, useState} from 'react';
import './Projects.scss';
import CustomTable from '../Table/CustomTable';
import { tableColumns } from './components/columns';
import { setPageData } from './modules/actions';
import { Link } from 'react-router-dom';
import AddProjectsModal from './components/AddProjectsModal/index';
import DataReviewModal from '../_dataReviewModal/Index';
import EditProjectsModal from "./components/EditProjectsModal";


const Projects = ({
  dataSource,
  totalCount,
  isLoading,
  addModalActive,
  editModalActive,
  projectStatus,
  actions,
  employees,
}) => {
  const [searchInput, setSearchInput] = useState('');
  const [showText, setShowText] = useState('Projects');

  const [isDataModalOpen, setIsDataModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const clickedProjectData = useRef({})

  const handleSearchChange = (input) => {
    setSearchInput(input);
  };

  useEffect(() => {
    fetchData(1, 10);
  }, [projectStatus, searchInput]);

  const fetchData = (page, pageSize) => {
    actions.setPageAndPageSize(page, pageSize)
    actions.fetchAllProjects(searchInput);
    setPageData(null);
  };

  const handleNavSelect = (label) => {
    actions.changeProjectTableStatus(label)
    fetchData(1, 10);
  };

  const handleCreateNewProject = () => {
    actions.openAddProjectModal()
  };

  const handleEditProject = () => {
    actions.openEditProjectModal()
  };

  const handleCloseNewProjectModal = () => {
    actions.closeAddProjectModal()
  };

  const handleCloseEditProjectModal = () => {
    clickedProjectData.current = {}
    actions.closeEditProjectModal()
  };

  const handleCloseDataModal = () => {
    setIsDataModalOpen(false);
    setSelectedProjectId(null);
  };


  const handleOpenDataModal = (projectId) => {
    setSelectedProjectId(projectId);
    setIsDataModalOpen(true);
  };

  const handleProjectClick = (project) => {
    handleOpenDataModal(project.key);
  };

  return (
    <div className="full-projects">
      <div className="page-header">
        <h2 className="projects-title">Projects</h2>
        <button className="create-project-button" onClick={handleCreateNewProject}>
          Create New Project
        </button>
      </div>
      <CustomTable
        data={dataSource}
        columns={tableColumns}
        totalCount={totalCount}
        fetchData={fetchData}
        isLoading={isLoading}
        navLabels={['All Projects', 'Active', 'Inactive', 'Completed']}
        selectedNavLabel={projectStatus}
        onNavSelect={handleNavSelect}
        onSearchChange={handleSearchChange}
        title="All Projects" 
        showText={showText}
        onProjectClick={handleProjectClick}
      />

      {addModalActive && (
        <AddProjectsModal handleClose={handleCloseNewProjectModal} isOpen={addModalActive} actions={actions} employees={employees}/>
      )}
      {editModalActive && (
        <EditProjectsModal handleClose={handleCloseEditProjectModal} isOpen={editModalActive} employees={employees} projectData={clickedProjectData.current} />
      )}

      {isDataModalOpen && (
        <DataReviewModal projectId={selectedProjectId} handleClose={handleCloseDataModal} isOpen={true} />
      )}
    </div>
  );
};

export default Projects;
