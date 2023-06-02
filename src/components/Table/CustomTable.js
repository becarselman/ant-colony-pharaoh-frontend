import React, { useState, useEffect } from 'react';
import { Table, Spin } from 'antd';
import { useDispatch } from 'react-redux';
import { setPageData, setTotalCount, setPageSize } from './modules/actions';
import PaginationComponent from './components/Pagination';
import TableHeader from './components/TableHeader';
import Navbar from './components/Navbar';

import './CustomTable.scss';

const CustomTable = ({ data, columns, totalCount, page, pageSize, onPageChange, onPageSizeChange, isLoading, navLabels, selectedNavLabel, onNavSelect, onSearchChange }) => {
  const [pageData, setPageDataState] = useState(null);
  const [filter, setFilter] = useState(selectedNavLabel);
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();

  const handlePageSizeChange = (value) => {
    onPageChange(1);
    onPageSizeChange(parseInt(value));
    dispatch(setPageData(null));
    dispatch(setPageSize(parseInt(value)));
  };

  const handlePageChange = (page) => {
    onPageChange(page);
    dispatch(setPageData(null));
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
    dispatch(setPageData(filteredData));
    dispatch(setTotalCount(filteredData.length));
  }, [data, filter, dispatch]);

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
    dispatch(setPageData(null));
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
                  <Spin size="large" />
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
