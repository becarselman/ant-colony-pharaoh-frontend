import React from 'react';
import './ProjectsTable.scss';
import axios from 'axios';
import TableHead from '../../../shared/table-elements/TableHead';
import TableRow from '../../../shared/table-elements/TableRow';
import TableHeader from '../../../shared/table-elements/TableHeader';
import { applyMiddleware } from 'redux';
import { Routes } from 'react-router';

const ProjectsTable = ({
  projects,
  totalNumberOfProjects,
  currentPage,
  projectsPerPage,
}) => {
  const columns = [
    'Name',
    'Description',
    'Duration (from-to)',
    'Developers',
    'Hourly rate',
    'Project value in BAM',
    'Status',
  ];

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  
  return (
    <div className="projects-table">
      <TableHeader totalNumberOfProjects={totalNumberOfProjects} handleSearch={() => {}} />
      <table className="table">
        <TableHead columns={columns} />
        <tbody>
          {currentProjects.map((project, index) => {
            const avatars = project.developers.map((developer) => (
              <img
                src={developer.user.avatar}
                alt={`${developer.user.firstName} ${developer.user.lastName}`}
              />
            ));
            const startDateString = new Date(project.duration.from).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
            });
            const endDateString = new Date(project.duration.to).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
            });
            const projectValue = project.projectValue.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            });
            const projectStatus = project.projectStatus || '';

            return (
              <TableRow
                key={index}
                project={project}
                avatars={avatars}
                startDateString={startDateString}
                endDateString={endDateString}
                projectValue={projectValue}
                projectStatus={projectStatus}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;