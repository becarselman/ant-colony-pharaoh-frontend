import DataInfo from '../DataModal/DataInfo';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const DataReviewModal = ({ projectId, handleClose, isOpen, actions }) => {

  const project = useSelector(state => state.dataReviewModal.project);
  const employee = useSelector(state => state.dataReviewModal.employee);

  useEffect(() => {
      actions.fetchProject(projectId);

  }, [projectId]);

  const employeeId = project.developers[0].employee;
  console.log(employeeId)

  useEffect(() => {
    const response = actions.fetchEmployee(employeeId);
    console.log(response);
  }, [employeeId]);

  const resetStateAndCloseModal = () => {
    handleClose();
  };

  return (
    <>
      <DataInfo handleClose={resetStateAndCloseModal} 
      isOpen={isOpen} 
      items={project}
      team={employee}
      />
    </>
  );
};

export default DataReviewModal;
