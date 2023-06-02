import React, { useEffect, useState } from 'react';
import './Projects.scss';
import CustomTable from '../Table/CustomTable';
import { tableColumns } from './components/columns';
import { setPageData} from './modules/actions';
import { useDispatch } from 'react-redux';

const Projects = ({
  dataSource,
  totalCount,
  isLoading,
  actions,
}) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedProjectStatus, setSelectedProjectStatus] = useState('All Projects');
  const [searchInput, setSearchInput] = useState('');
  
  const dispatch = useDispatch();

  const handleSearchChange = (input) => {
    setSearchInput(input);
  };

  useEffect(() => {
    fetchData();
  }, [page, pageSize, selectedProjectStatus, searchInput]);

  const fetchData = () => {
    actions.fetchAllProjects(page, pageSize, selectedProjectStatus, searchInput);
    dispatch(setPageData(null));
  };

  const handleNavSelect = (label) => {
    setSelectedProjectStatus(label);
    setPage(1);
    dispatch(setPageData(null));
  };

  return (
    <div>
      <div className="page-header">
        <h2 className="projects-title">Projects</h2>
        <button className="create-project-button">Create New Project</button>
      </div>
      <CustomTable
        data={dataSource}
        columns={tableColumns}
        totalCount={totalCount}
        page={page}
        pageSize={pageSize}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
        isLoading={isLoading}
        navLabels={['All Projects', 'Active', 'Inactive', 'Completed']}
        selectedNavLabel={selectedProjectStatus}
        onNavSelect={handleNavSelect}
        onSearchChange={handleSearchChange}
      />
    </div>
  );
};

export default Projects;
