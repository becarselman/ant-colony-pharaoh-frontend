import React, { useState, useEffect } from 'react';
import { Table, Spin } from 'antd';
import PaginationComponent from './components/Pagination';
import './CustomTable.scss';
import TableHeader from './components/TableHeader';

const CustomTable = ({ data, columns, totalCount, page, pageSize, onPageChange, onPageSizeChange, isLoading }) => {
  const [pageData, setPageData] = useState(null);

  const handlePageSizeChange = (value) => {
    onPageChange(1);
    onPageSizeChange(parseInt(value));
  };

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  useEffect(() => {
    setPageData(data);
  }, [data]);

  const tableHeader = (
    <TableHeader totalCount={totalCount} handleSearch={(input) => console.log('Search:', input)} />
  );
  

  return (
    <div className="custom-table-container">
      <div className="table-container">
        {isLoading ? (
          <div className="loader-container">
            <Spin size="large" />
          </div>
        ) : (
          <Table
            dataSource={pageData}
            columns={columns}
            className="table"
            pagination={false}
            bordered
            title={() => tableHeader}
          />
        )}
      </div>
      <div className="pagination-container">
        <PaginationComponent
          totalItems={totalCount}
          pageSize={pageSize}
          currentPage={page}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default CustomTable;
