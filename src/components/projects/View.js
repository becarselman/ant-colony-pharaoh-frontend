import React, {useEffect, useRef, useState} from 'react';
import './Projects.scss';
import CustomTable from '../Table/CustomTable';
import { tableColumns } from './components/columns';
import { setPageData } from './modules/actions';
import { Link } from 'react-router-dom';
import AddProjectsModal from './components/AddProjectsModal/index';
import EditProjectsModal from "./components/EditProjectsModal";

const Projects = ({
  dataSource,
  totalCount,
  isLoading,
  actions,
  employees,
}) => {
  const [selectedProjectStatus, setSelectedProjectStatus] = useState('All Projects');
  const [searchInput, setSearchInput] = useState('');
  const [showText, setShowText] = useState('Projects');
  const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);
  const [isEditProjectModalOpen, setIsEditProjectModalOpen] = useState(false);
  const clickedProjectData = useRef({})

  const handleSearchChange = (input) => {
    setSearchInput(input);
  };

  useEffect(() => {
    fetchData(1, 10);
  }, [selectedProjectStatus, searchInput]);

  const fetchData = (page, pageSize) => {
    actions.fetchAllProjects(page, pageSize, selectedProjectStatus, searchInput);
    setPageData(null);
  };

  const handleNavSelect = (label) => {
    setSelectedProjectStatus(label);
    fetchData(1, 10);
  };

  const handleCreateNewProject = () => {
    setIsAddProjectModalOpen(true);
  };

  const handleEditProject = () => {
    setIsEditProjectModalOpen(true);
  };

  const handleCloseNewProjectModal = () => {
    setIsAddProjectModalOpen(false);
  };

  const handleCloseEditProjectModal = () => {
    clickedProjectData.current = {}
    setIsEditProjectModalOpen(false);
  };

  const onRowClick = (projectData) => {
    clickedProjectData.current = projectData
    handleEditProject()
  }

  return (
    <div>
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
        selectedNavLabel={selectedProjectStatus}
        onNavSelect={handleNavSelect}
        onSearchChange={handleSearchChange}
        onRowClick={onRowClick}
        title="All Projects" 
        showText={showText}
      />

      {isAddProjectModalOpen && (
        <AddProjectsModal handleClose={handleCloseNewProjectModal} isOpen={isAddProjectModalOpen} actions={actions} employees={employees}/>
      )}
      {isEditProjectModalOpen && (
        <EditProjectsModal handleClose={handleCloseEditProjectModal} isOpen={isEditProjectModalOpen} employees={employees} projectData={clickedProjectData.current} />
      )}
    </div>
  );
};

export default Projects;
