import React, { useEffect, useState } from 'react';
import './Projects.scss';
import CustomTable from '../Table/CustomTable';
import { tableColumns } from './components/columns';
import { startLoader, stopLoader } from './modules/actions';

const Projects = ({
  dataSource,
  totalCount,
  isLoading,
  error,
  actions,
}) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedProjectStatus, setSelectedProjectStatus] = useState('All Projects');
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    fetchData();
  }, [page, pageSize, selectedProjectStatus, searchInput]);

  const fetchData = () => {
    actions.fetchAllProjects(page, pageSize, selectedProjectStatus, searchInput);
  };

  const handleNavSelect = (label) => {
    setSelectedProjectStatus(label);
    setPage(1);
  };

  const handleSearchChange = (input) => {
    setSearchInput(input);
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
        startLoader={startLoader} 
        stopLoader={stopLoader} 
      />
    </div>
  );
};

export default Projects;
