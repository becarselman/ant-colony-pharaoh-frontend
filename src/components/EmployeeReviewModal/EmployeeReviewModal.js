import EmployeeOverview from '../DataModal/EmployeeOverview';
import { useEffect } from 'react';

const EmployeeReviewModal = ({ employeeId, handleClose, isOpen, actions, employee }) => {

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
      />
    </>
  );
};

export default EmployeeReviewModal;
