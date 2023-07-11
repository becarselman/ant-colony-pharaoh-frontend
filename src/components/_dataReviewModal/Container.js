import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProject, deleteProject} from './modules/actions';

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
      deleteProject
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
