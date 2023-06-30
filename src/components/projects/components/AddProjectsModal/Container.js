import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createProjectRequest, fetchAllEmployeesRequest } from './modules/actions'; 

const mapStateToProps = (state) => {

  return {
    isLoading: state.projects.isLoading,
    error: state.projects.error,
    employees: state.projectsModal.employees, 
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      createProjectRequest,
      fetchAllEmployeesRequest,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
