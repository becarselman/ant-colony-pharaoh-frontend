import ProjectOverview from '../DataModal/ProjectOverview';
import { useEffect } from 'react';

const DataReviewModal = ({ projectId, handleClose, isOpen, actions, project, parentActions, clickedProjectData }) => {

  useEffect(() => {
    actions.fetchProject(projectId);
  }, [projectId]);

  const resetStateAndCloseModal = () => {
    handleClose();
  };

  const deleteProject = () => {
    actions.deleteProject(projectId)
    resetStateAndCloseModal()
    parentActions.fetchAllProjects("")
  }

  return (
    <>
      <ProjectOverview
        handleClose={resetStateAndCloseModal}
        isOpen={isOpen}
        items={project.project}
        parentActions={parentActions}
        deleteProject={deleteProject}
        clickedProjectData={clickedProjectData}
      />
    </>
  );
};

export default DataReviewModal;
