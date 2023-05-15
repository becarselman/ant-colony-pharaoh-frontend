import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { resetPasswordRequest } from "../../../actions/authActions";
import ResetPassword from "./resetPassword";


const mapStateToProps = (state) => ({
  loading: state.resetPassword.loading,
  error: state.resetPassword.error,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      resetPasswordRequest,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
