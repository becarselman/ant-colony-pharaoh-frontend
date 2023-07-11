import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import PaginationComponent from './components/Pagination';
import TableHeader from './components/TableHeader';
import Navbar from './components/Navbar';
import Logotype from '../../images/loader/Logotype.png';

import './CustomTable.scss';

const CustomTable = ({ data, columns, totalCount, fetchData, isLoading, navLabels, selectedNavLabel, selectedPage, onNavSelect, onSearchChange, title, showText, onProjectClick }) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [filter, setFilter] = useState(selectedNavLabel);
  const [searchValue, setSearchValue] = useState('');

  const handleRowClick = (record) => {
    if (onProjectClick) {
      onProjectClick(record);
    }
  };

  const getRowProps = (record) => {
    return {
      onClick: () => handleRowClick(record)
    };
  };
  const handlePageSizeChange = (value) => {
    setPage(1);
    setPageSize(parseInt(value));
    fetchData(1, parseInt(value));
  };

  const handlePageChange = (page) => {
    setPage(page);
    fetchData(page, pageSize);
  };

  const handleFilterChange = (label) => {
    setFilter(label);
  };

  const handleSearchValueChange = (value) => {
    setSearchValue(value);
  };

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
    setPage(page);
  };

  const tableHeader = () => (
    <TableHeader
      totalCount={totalCount}
      searchValue={searchValue}
      handleSearch={handleSearch}
      handleSearchValueChange={handleSearchValueChange}
      title={title} 
    />
  );

  const tableContent = (
    <Table
      dataSource={data}
      columns={columns}
      className="table"
      pagination={false}
      bordered
      title={tableHeader}
      loading={isLoading}
      onRow={getRowProps}
    />
  );

  return (
    <div className="custom-table-container">
  <Navbar navLabels={navLabels} handlePageSelect={handlePageSelect} />
  <div className="table-container">
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
      showText={showText}
    />
  </div>
</div>

  );
};

export default CustomTable;