import React, { useState } from 'react';
import { Table, Pagination, Select } from 'antd';
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

  const paginationConfig = {
    pageSize: pageSize,
    total: totalItems,
    current: currentPage,
    onShowSizeChange: handlePageSizeChange,
    onChange: handlePageChange,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalItems / pageSize)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleLastPage = () => {
    setCurrentPage(Math.ceil(totalItems / pageSize));
  };

  return (
    <div className="table-container">
      <Table dataSource={pageData} columns={columns} className="table" pagination={false} />

      <div className="pagination-container">
        <div className="pagination-info">
          <span className="rows-text">Rows per page:</span>
          <Select value={pageSize.toString()} onChange={handlePageSizeChange}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
              <Select.Option key={value} value={value.toString()}>
                {value}
              </Select.Option>
            ))}
          </Select>
          <span className="show-total">{paginationConfig.showTotal(totalItems, [startIndex + 1, endIndex])}</span>
        </div>
        <div className="pagination-right">
        <Pagination {...paginationConfig} className="custom-pagination" showQuickJumper={false} />
        <div className="next-last-buttons">
          <button onClick={handleNextPage} disabled={currentPage === Math.ceil(totalItems / pageSize)}>
            Next
          </button>
          <button onClick={handleLastPage} disabled={currentPage === Math.ceil(totalItems / pageSize)}>
            Last
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
