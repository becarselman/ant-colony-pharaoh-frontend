import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchEmployee } from './modules/actions';

const mapStateToProps = (state) => {
  return {
    employee: state.employee,
    error: state.project.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      fetchEmployee,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
