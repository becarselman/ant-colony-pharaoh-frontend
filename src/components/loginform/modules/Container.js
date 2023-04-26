import { connect } from "react-redux";
import LoginForm from "../LoginForm";
import { bindActionCreators } from "redux";
import { loginRequest } from "../../../actions/authActions";

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      loginRequest,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);

