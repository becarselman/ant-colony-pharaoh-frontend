import { connect } from "react-redux";
import LoginForm from "../LoginForm";
import { loginRequest } from "../../../actions/authActions";

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  loginRequest: (email, password) => dispatch(loginRequest(email, password)),
});

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default LoginFormContainer;
