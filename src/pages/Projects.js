import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './Projects.scss';

import Pagination from '../components/projects/pagination/Pagination';
import ProjectsTable from '../components/projects/table/ProjectsTable';
import Navbar from '../shared/navbar/Navbar';

const Projects = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activePage, setActivePage] = useState(1);
  const [projectStatus, setProjectStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [allProjects, setAllProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [totalNumberOfProjects, setTotalNumberOfProjects] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(10);
  const [users, setUsers] = useState([]);
  const [activeTab, setActiveTab] = useState('All Projects');

  const baseUrl = process.env.REACT_APP_API_URL;

  const getProjects = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/projects`);
      setAllProjects(response.data);  
      setTotalNumberOfProjects(response.data.length);
      setLastPage(Math.ceil(response.data.length / projectsPerPage));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.error);
      } else {
        console.error('Unexpected error: ', error);
      }
    }
    setIsLoading(false);
  }, [baseUrl, projectsPerPage]);

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  useEffect(() => {
    if (activePage === 1) setProjectStatus('');
    else if (activePage === 2) setProjectStatus('active');
    else if (activePage === 3) setProjectStatus('inactive');
    else if (activePage === 4) setProjectStatus('completed');
  }, [activePage]);

  useEffect(() => {
    if (activeTab === 'All Projects') {
      setFilteredProjects(allProjects);
    } else if (activeTab === 'Active') {
      setFilteredProjects(allProjects.filter(project => project.projectStatus === 'Active'));
    } else if (activeTab === 'Inactive') {
      setFilteredProjects(allProjects.filter(project => project.projectStatus === 'Inactive'));
    } else if (activeTab === 'Completed') {
      setFilteredProjects(allProjects.filter(project => project.projectStatus === 'Completed'));
    }
  }, [activeTab, allProjects]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navLabels = ['All Projects', 'Active', 'Inactive', 'Completed'];

  return (
    <>
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-title">Projects</div>
          <button className="create-project-button" onClick={() => {}}>
            Create new project
          </button>
        </div>
        <div className="projects-content">
          <div className="navbar-container">
            <Navbar
              navLabels={navLabels}
              handlePageSelect={(pageNumber, tabLabel) => {
                setActivePage(pageNumber);
                setProjectsPerPage(10);
                setCurrentPage(1);
                setSearchTerm('');
                setFilteredProjects([]);
                setActiveTab(tabLabel);
              }}
            />
          </div>
          <ProjectsTable
            totalNumberOfProjects={totalNumberOfProjects}
            projects={filteredProjects}
            users={users}
            handleSearch={(input) => setSearchTerm(input)}
            currentPage={currentPage}
            projectsPerPage={projectsPerPage}
          />
        </div>
      </div>
      <div className="pagination-container">
        <Pagination
          totalNumberOfProjects={filteredProjects.length}
          currentPage={currentPage}
          lastPage={Math.ceil(filteredProjects.length / projectsPerPage)}
          projectsPerPage={projectsPerPage}
          handleProjectsPerPage={(projectsPerPage) => {
            setProjectsPerPage(projectsPerPage);
            setCurrentPage(1);
            setSearchTerm('');
          }}
          handlePageChange={(pageNumber) => setCurrentPage(pageNumber)}
        />
      </div>
    </>
  );
};

export default Projects;
