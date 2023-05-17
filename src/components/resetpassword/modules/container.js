import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { resetPasswordRequest } from "../../../actions/authActions";


const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      resetPasswordRequest,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
