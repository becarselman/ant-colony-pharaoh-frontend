import React from 'react';
import CustomTable from '../components/Table/CustomTable';
import './Projects.scss';

const Projects = () => {
  const tableData = [
    {
      key: '1',
      name: 'Project 1',
      description: 'Description of Project 1',
      duration: '2023-01-01 to 2023-12-31',
      developers: 'John Doe, Jane Smith',
      hourlyRate: 50,
      projectValue: 10000,
      status: 'In progress',
    },
  ];

  const tableColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Duration (from-to)',
      dataIndex: 'duration',
      key: 'duration',
    },
    {
      title: 'Developers',
      dataIndex: 'developers',
      key: 'developers',
    },
    {
      title: 'Hourly rate',
      dataIndex: 'hourlyRate',
      key: 'hourlyRate',
    },
    {
      title: 'Project value in BAM',
      dataIndex: 'projectValue',
      key: 'projectValue',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  return (
    <div className="table-container">
      <CustomTable data={tableData} columns={tableColumns} />
    </div>
  );
};

export default Projects;
