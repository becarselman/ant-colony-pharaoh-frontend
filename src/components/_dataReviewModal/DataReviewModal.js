import DataInfo from '../DataModal/DataInfo';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const DataReviewModal = ({ projectId, handleClose, isOpen, actions }) => {

  const project = useSelector(state => state.dataReviewModal.project);

  useEffect(() => {
      actions.fetchProject(projectId);
  }, [projectId]);

  const resetStateAndCloseModal = () => {
    handleClose();
  };

  return (
    <>
      <DataInfo handleClose={resetStateAndCloseModal} 
      isOpen={isOpen} 
      items={project}/>
    </>
  );
};

export default DataReviewModal;
