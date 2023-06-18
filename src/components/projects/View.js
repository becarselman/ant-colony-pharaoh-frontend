import React, { useEffect, useState } from 'react';
import './Projects.scss';
import CustomTable from '../Table/CustomTable';
import { tableColumns } from './components/columns';
import { setPageData } from './modules/actions';

const Projects = ({
  dataSource,
  totalCount,
  isLoading,
  actions,
}) => {
  const [selectedProjectStatus, setSelectedProjectStatus] = useState('All Projects');
  const [searchInput, setSearchInput] = useState('');

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
        fetchData={fetchData}
        isLoading={isLoading}
        navLabels={['All Projects', 'Active', 'Inactive', 'Completed']}
        selectedNavLabel={selectedProjectStatus}
        onNavSelect={handleNavSelect}
        onSearchChange={handleSearchChange}
        title="All Projects" 
      />
    </div>
  );
};

export default Projects;
