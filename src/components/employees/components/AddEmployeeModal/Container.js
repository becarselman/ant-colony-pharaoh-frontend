import { connect } from 'react-redux';
import { sendUserData } from './modules/actions';
import { bindActionCreators } from "redux";


const mapStateToProps = (state) => {
  return {
    isLoading: state.addEmployeeModal.isLoading,
    error: state.addEmployeeModal.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      sendUserData,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);


