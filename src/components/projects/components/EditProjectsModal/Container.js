import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editProjectRequest, fetchAllEmployeesRequest } from './modules/actions';

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
      editProjectRequest,
      fetchAllEmployeesRequest,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
