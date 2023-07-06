import { connect } from 'react-redux';
import { bindActionCreators } from "redux";


const mapStateToProps = (state) => {
    return {
        name: state.auth.userName,
        surname: state.auth.userSurname
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        {},
        dispatch
    ),
});

export default connect(mapStateToProps, mapDispatchToProps);


