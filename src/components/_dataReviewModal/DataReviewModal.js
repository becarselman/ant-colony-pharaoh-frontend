import ProjectOverview from '../DataModal/ProjectOverview';
import { useEffect } from 'react';

const DataReviewModal = ({ projectId, handleClose, isOpen, actions, project, parentActions }) => {

  useEffect(() => {
    actions.fetchProject(projectId);
  }, [projectId]);

  const resetStateAndCloseModal = () => {
    handleClose();
  };

  return (
    <>
      <ProjectOverview
        handleClose={resetStateAndCloseModal}
        isOpen={isOpen}
        items={project.project}
        parentActions={parentActions}
      />
    </>
  );
};

export default DataReviewModal;
