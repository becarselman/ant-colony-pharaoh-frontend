import { connect } from 'react-redux';
import { sendEditUserData } from './modules/actions';
import { bindActionCreators } from "redux";


const mapStateToProps = (state) => {
  return {
    isLoading: state.editEmployeeModal.isLoading,
    error: state.editEmployeeModal.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      sendEditUserData
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);


