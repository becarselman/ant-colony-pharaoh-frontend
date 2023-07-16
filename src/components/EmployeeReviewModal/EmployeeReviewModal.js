import EmployeeOverview from '../DataModal/EmployeeOverview';
import { useEffect } from 'react';

const EmployeeReviewModal = ({ employeeId, handleClose, isOpen, actions, employee, parentActions }) => {

  useEffect(() => {
    actions.fetchEmployee(employeeId);
  }, [employeeId]);

  const resetStateAndCloseModal = () => {
    handleClose();
  };

  const deleteEmployee = () => {
    actions.deleteEmployee(employeeId)
    resetStateAndCloseModal()
    parentActions.fetchAllEmployees("All Employee", "")
  }

  return (
    <>
      <EmployeeOverview
        handleClose={resetStateAndCloseModal}
        isOpen={isOpen}
        items={employee.employee}
        parentActions={parentActions}
        deleteEmployee={deleteEmployee}
      />
    </>
  );
};

export default EmployeeReviewModal;
