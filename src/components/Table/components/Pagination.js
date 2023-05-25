import React from 'react';
import { Pagination, Select } from 'antd';
import '../CustomTable.scss';

const PaginationComponent = ({ totalItems, pageSize, currentPage, onPageChange, onPageSizeChange }) => {
  const handlePageSizeChange = (value) => {
    onPageSizeChange(parseInt(value));
  };

  const handlePageChange = (page) => {
    const newSkip = (page - 1) * pageSize;
    onPageChange(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginationConfig = {
    pageSize: pageSize,
    total: totalItems,
    current: currentPage,
    onShowSizeChange: handlePageSizeChange,
    onChange: handlePageChange,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} Projects`,
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalItems / pageSize)) {
      onPageChange(currentPage + 1);
    }
  };

  const handleLastPage = () => {
    onPageChange(Math.ceil(totalItems / pageSize));
  };

  const isLastPage = currentPage === Math.ceil(totalItems / pageSize);

  const pageSizeOptions = ['10', '20', '50'];

  const pageSizeSelectOptions = pageSizeOptions.map((value) => (
    <Select.Option key={value} value={value}>
      {value}
    </Select.Option>
  ));

  const pageSizeSelect = (
    <Select value={pageSize.toString()} onChange={handlePageSizeChange}>
      {pageSizeSelectOptions}
    </Select>
  );

  const showTotalSpan = (
    <span className="show-total">{paginationConfig.showTotal(totalItems, [startIndex + 1, endIndex])}</span>
  );

  const nextButton = (
    <button onClick={handleNextPage} disabled={isLastPage}>
      Next
    </button>
  );

  const lastButton = (
    <button onClick={handleLastPage} disabled={isLastPage}>
      Last
    </button>
  );

  return (
    <div className="pagination-container">
      <div className="pagination-info">
        <span className="rows-text">Rows per page:</span>
        {pageSizeSelect}
        {showTotalSpan}
      </div>
      <div className="pagination-right">
        <Pagination {...paginationConfig} className="custom-pagination" />
        <div className="next-last-buttons">
          {nextButton}
          {lastButton}
        </div>
      </div>
    </div>
  );
};

export default PaginationComponent;
