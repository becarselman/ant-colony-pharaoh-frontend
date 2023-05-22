import React from 'react';

const PageNumberButton = ({ pageNumber, isActive, onClick }) => {
  return (
    <button
      className={`page-number-button ${isActive ? 'active' : 'inactive'}`}
      onClick={onClick}
    >
      {pageNumber}
    </button>
  );
};

export default PageNumberButton;
