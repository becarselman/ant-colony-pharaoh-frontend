import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { passwordRequest } from "../../../actions/authActions";

const mapStateToProps = (state) => ({
    loading: state.loading,
    error: state.error
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      passwordRequest,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);

