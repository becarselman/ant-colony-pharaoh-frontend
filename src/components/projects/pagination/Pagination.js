import React from 'react';
import './Pagination.scss';
import ProjectsPerPageSelector from './ProjectsPerPageSelector';
import PageNumberButton from './PageNumberButton';

const Pagination = ({
  totalNumberOfProjects,
  currentPage,
  lastPage,
  projectsPerPage,
  handleProjectsPerPage,
  handlePageChange,
}) => {
  const pageNumbers = Array.from({ length: lastPage }, (_, index) => index + 1);
  const visiblePageNumbers = pageNumbers.slice(
    Math.max(0, currentPage - 2),
    Math.min(pageNumbers.length, currentPage + 3)
  );

  return (
    <div className="pagination">
      <div className="pagination__top">
        <div className="pagination__rows-per-page">
          <span>Rows per page:</span>
          <ProjectsPerPageSelector
            projectsPerPage={projectsPerPage}
            handleProjectsPerPage={handleProjectsPerPage}
          />
        </div>
        <span className="pagination__project-range">
          {totalNumberOfProjects === 0 ? 0 : (currentPage - 1) * projectsPerPage + 1}
          {' - '}
          {Math.min(currentPage * projectsPerPage, totalNumberOfProjects)}
          {' of '}
          {totalNumberOfProjects}
          {' Projects'}
        </span>
      </div>
      <div className="pagination__buttons">
        {currentPage > 1 && (
          <>
            {pageNumbers.length > 2 && (
              <PageNumberButton
                key="first"
                pageNumber="First"
                onClick={() => handlePageChange(1)}
              />
            )}
            <PageNumberButton
              key="prev"
              pageNumber="Prev"
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </>
        )}
        {visiblePageNumbers.map((pageNumber) => {
          return (
            <PageNumberButton
              key={pageNumber}
              pageNumber={pageNumber}
              isActive={currentPage === pageNumber}
              onClick={() => handlePageChange(pageNumber)}
            />
          );
        })}
        {currentPage < lastPage && (
          <>
            <PageNumberButton
              key="next"
              pageNumber="Next"
              onClick={() => handlePageChange(currentPage + 1)}
            />
            {pageNumbers.length > 2 && (
              <PageNumberButton
                key="last"
                pageNumber="Last"
                onClick={() => handlePageChange(lastPage)}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Pagination;
