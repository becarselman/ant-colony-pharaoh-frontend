import React, { useState, useEffect } from 'react';
import { Table, Spin } from 'antd';
import PaginationComponent from './components/Pagination';
import TableHeader from './components/TableHeader';
import Navbar from './components/Navbar';
import Logotype from '../../images/loader/Logotype.png';

import './CustomTable.scss';

const CustomTable = ({ data, columns, totalCount, page, pageSize, onPageChange, onPageSizeChange, isLoading, navLabels, selectedNavLabel, onNavSelect, onSearchChange }) => {
  const [pageData, setPageDataState] = useState(null);
  const [filter, setFilter] = useState(selectedNavLabel);
  const [searchValue, setSearchValue] = useState('');

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

  const handleSearchValueChange = (value) => {
    setSearchValue(value);
  };

  useEffect(() => {
    const filteredData = data.filter((item) => {
      return item.status === filter || filter === 'All Projects';
    });
    setPageDataState(filteredData);
  }, [data, filter]);

  useEffect(() => {
    handleFilterChange(selectedNavLabel);
  }, [selectedNavLabel]);

  useEffect(() => {
    onSearchChange(searchValue);
  }, [searchValue, onSearchChange]);

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const handlePageSelect = (page, label) => {
    onNavSelect(label);
    handleFilterChange(label);
  };

  const tableHeader = () => (
    <TableHeader
      totalCount={totalCount}
      searchValue={searchValue}
      handleSearch={handleSearch}
      handleSearchValueChange={handleSearchValueChange}
    />
  );

  const tableContent = (
    <Table
      dataSource={pageData}
      columns={columns}
      className="table"
      pagination={false}
      bordered
      title={tableHeader}
      isLoading={isLoading}
    />
  );

  return (
    <div className="custom-table-container">
      <Navbar navLabels={navLabels} handlePageSelect={handlePageSelect} />
      <div className="table-container">
        {tableContent}
        <table className="ant-table">
          <tbody>
          {isLoading && (
  <tr className="loader-container">
    <td colSpan={columns.length}>
      <div className="loader">
        <img src={Logotype} alt="Logo" className="logo" />
      </div>
    </td>
  </tr>
)}
          </tbody>
        </table>
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
