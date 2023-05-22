import React from 'react';
import { Table } from 'antd';
import './CustomTable.scss';

const CustomTable = ({ data, columns }) => {
  return (
    <div className="table-container">
      <Table
        dataSource={data}
        columns={columns}
        className="table" 
        pagination={false} 
      />
    </div>
  );
};

export default CustomTable;
