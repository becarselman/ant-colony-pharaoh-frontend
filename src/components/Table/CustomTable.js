import React, { useState, useEffect } from 'react';
import { Table, Spin } from 'antd';

import PaginationComponent from './components/Pagination';
import TableHeader from './components/TableHeader';
import Navbar from './components/Navbar';

import './CustomTable.scss';

const CustomTable = ({ data, columns, totalCount, page, pageSize, onPageChange, onPageSizeChange, isLoading, navLabels, selectedNavLabel, onNavSelect, onSearchChange }) => {
  const [pageData, setPageData] = useState(null);
  const [filter, setFilter] = useState(selectedNavLabel);

  const handlePageSizeChange = (value) => {
    onPageChange(1);
    onPageSizeChange(parseInt(value));
  };

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const handleFilterChange = (label) => {
    setFilter(label);
  };

  useEffect(() => {
    const filteredData = data.filter((item) => {
      return item.status === filter || filter === 'All Projects';
    });
    setPageData(filteredData);
  }, [data, filter]);

  useEffect(() => {
    handleFilterChange(selectedNavLabel); 
  }, [selectedNavLabel]);

  const handleSearch = (input) => {
    onSearchChange(input);
  };

  const handlePageSelect = (page, label) => {
    onNavSelect(label);
    handleFilterChange(label);
  };

  const tableHeader = (
    <TableHeader totalCount={totalCount} handleSearch={handleSearch} />
  );

  const loaderContainer = isLoading ? (
    <div className="loader-container">
      <Spin size="large" />
    </div>
  ) : null;

  const tableContent = isLoading ? null : (
    <Table 
      dataSource={pageData}
      columns={columns}
      className="table"
      pagination={false}
      bordered
      title={() => tableHeader}
    />
  );

  return (
    <div className="custom-table-container">
      <Navbar
        navLabels={navLabels} 
        handlePageSelect={handlePageSelect}
      />
      <div className="table-container">
        {loaderContainer}
        {tableContent}
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
