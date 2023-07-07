import { connect } from 'react-redux';
import { setPageAndPageSize, fetchAllProjects, openAddProjectModal, closeAddProjectModal, openEditProjectModal, closeEditProjectModal, changeProjectTableStatus } from './modules/actions';
import { bindActionCreators } from "redux";


const mapStateToProps = (state) => {
  return {
    dataSource: state.projects.dataSource,
    totalCount: state.projects.totalCount,
    addModalActive: state.projects.addModalActive,
    editModalActive: state.projects.editModalActive,
    projectStatus: state.projects.projectStatus,
    isLoading: state.projects.isLoading,
    error: state.projects.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
          setPageAndPageSize,
          fetchAllProjects,
          openAddProjectModal,
          closeAddProjectModal,
          openEditProjectModal,
          closeEditProjectModal,
          changeProjectTableStatus
      },
      dispatch
    ),
  });

export default connect(mapStateToProps, mapDispatchToProps);


