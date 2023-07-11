import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProject } from './modules/actions';

const mapStateToProps = (state) => {
  return {
    project: state.project,
    error: state.project.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      fetchProject,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
