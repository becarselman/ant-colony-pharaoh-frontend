import React from 'react';
import CustomTable from '../Table/CustomTable';
import { tableData } from './components/data';
import { tableColumns } from './components/columns';

const Projects = () => {
  return (
    <div className="table-container">
      <CustomTable data={tableData} columns={tableColumns} />
    </div>
  );
};

export default Projects;
