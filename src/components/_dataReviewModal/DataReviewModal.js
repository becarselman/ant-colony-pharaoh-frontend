import DataInfo from '../DataModal/DataInfo';
import { useEffect } from 'react';

const DataReviewModal = ({ projectId, handleClose, isOpen, actions, project }) => {

  useEffect(() => {
    actions.fetchProject(projectId);
  }, [projectId]);

  const resetStateAndCloseModal = () => {
    handleClose();
  };

  return (
    <>
      <DataInfo
        handleClose={resetStateAndCloseModal}
        isOpen={isOpen}
        items={project.project}
      />
    </>
  );
};

export default DataReviewModal;
