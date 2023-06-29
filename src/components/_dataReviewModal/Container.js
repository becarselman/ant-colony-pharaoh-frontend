import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProject } from './modules/actions';
import { fetchEmployee } from './modules/actions';

const mapStateToProps = (state) => {
  return {
    employee: state.dataReviewModal.employee,
    project: state.dataReviewModal.project,
    error: state.dataReviewModal.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      fetchProject,
      fetchEmployee,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
