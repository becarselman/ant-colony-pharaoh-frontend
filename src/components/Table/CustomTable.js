import React, { useState } from 'react';
import { Table } from 'antd';
import PaginationComponent from './Pagination';
import './CustomTable.scss';

const CustomTable = ({ data, columns }) => {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageSizeChange = (value) => {
    setCurrentPage(1);
    setPageSize(parseInt(value));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalItems = data.length;

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const pageData = data.slice(startIndex, endIndex);

  return (
    <div className="custom-table-container">
      <div className="table-container">
        <Table dataSource={pageData} columns={columns} className="table" pagination={false} />
      </div>
      <div className="pagination-container">
        <PaginationComponent
          totalItems={totalItems}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}   
          onPageSizeChange={handlePageSizeChange}
        />
      </div>
    </div>
  );
};

export default CustomTable;
