import React, { useEffect, useState } from 'react';
import './Projects.scss';
import CustomTable from '../Table/CustomTable';
import { tableColumns } from './components/columns';
import { getAllProjects } from '../../service/projectsService';

const Projects = () => {
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navLabels = ['All Projects', 'Active', 'Inactive', 'Completed'];
  const [selectedProjectStatus, setSelectedProjectStatus] = useState(navLabels[0]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    fetchData();
  }, [page, pageSize, selectedProjectStatus, searchInput]);

  const fetchData = () => {
    setIsLoading(true);

    getAllProjects(page, pageSize, selectedProjectStatus, searchInput)
      .then(function (response) {
        const projects = response.data.projects;
        const total = response.data.count;

        const formattedData = projects.map((project, index) => {
          const developers = project.developers.map((developer) => developer.user);
          const fullTime = project.developers.map((developer) => developer.fullTime);
          const startDateString = new Date(project.duration.from).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
          });

          const endDateString = new Date(project.duration.to).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
          });

          return {
            key: project._id || index.toString(),
            name: project.name || '',
            description: project.description || '',
            duration: `${startDateString} - ${endDateString}`,
            developers: developers.join(', ') || '',
            fullTime: fullTime.join(', ') || '', 
            hourlyRate: project.hourlyRate || 0,
            projectValue: project.projectValue || 0,
            status: project.projectStatus || '',
          };
        });

        setDataSource(formattedData);
        setTotalCount(total);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setIsLoading(false);
      });
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
        navLabels={navLabels}
        selectedNavLabel={selectedProjectStatus}
        onNavSelect={handleNavSelect}
        onSearchChange={handleSearchChange}
      />
    </div>
  );
};

export default Projects;
