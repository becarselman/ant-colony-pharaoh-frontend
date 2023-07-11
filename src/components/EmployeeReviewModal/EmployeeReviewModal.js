import EmployeeOverview from '../DataModal/EmployeeOverview';
import { useEffect } from 'react';

const EmployeeReviewModal = ({ employeeId, handleClose, isOpen, actions, employee, parentActions }) => {

  useEffect(() => {
    actions.fetchEmployee(employeeId);
  }, [employeeId]);

  const resetStateAndCloseModal = () => {
    handleClose();
  };


  return (
    <>
      <EmployeeOverview
        handleClose={resetStateAndCloseModal}
        isOpen={isOpen}
        items={employee.employee}
        parentActions={parentActions}
      />
    </>
  );
};

export default EmployeeReviewModal;
