import React from 'react';
import { Pagination, Select, Spin } from 'antd';
import '../CustomTable.scss';

const PaginationComponent = ({ totalItems, pageSize, currentPage, onPageChange, onPageSizeChange, loading, showText }) => {
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
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} ${showText}`,
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalItems / pageSize)) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const isFirstPage = currentPage === 1;
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

  const previousButton = (
    <button className="previous-button" onClick={handlePreviousPage} disabled={currentPage === 1}>
      Previous
    </button>
  );
  
  const nextButton = (
    <button className="next-button" onClick={handleNextPage} disabled={isLastPage}>
      Next
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
        {previousButton}
        <Pagination {...paginationConfig} className="custom-pagination test" />
        {nextButton}
      </div>
      {loading && <Spin className="loading-spinner" />}
    </div>
  );
};

export default PaginationComponent;
