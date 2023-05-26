import React, { useState, useEffect } from 'react';
import { Table, Spin } from 'antd';
import PaginationComponent from './components/Pagination';
import './CustomTable.scss';
import TableHeader from './components/TableHeader';
import Navbar from './components/Navbar';
import NavLink from './components/Navlink';

const CustomTable = ({ data, columns, totalCount, page, pageSize, onPageChange, onPageSizeChange, isLoading, navLabels, selectedNavLabel, onNavSelect }) => {
  const [pageData, setPageData] = useState(null);

  const handlePageSizeChange = (value) => {
    onPageChange(1);
    onPageSizeChange(parseInt(value));
  };

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  useEffect(() => {
    const filteredData = data.filter((item) => {
      return item.status === selectedNavLabel || selectedNavLabel === 'All Projects';
    });
    setPageData(filteredData);
  }, [data, selectedNavLabel]);

  const tableHeader = (
    <TableHeader totalCount={totalCount} handleSearch={(input) => console.log('Search:', input)} />
  );

  return (
    <div className="custom-table-container">
      <Navbar
        navLabels={navLabels} 
        handlePageSelect={(page, label) => {
          onNavSelect(label);
        }}
      />
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