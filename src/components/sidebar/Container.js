import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        name: state.auth.userName,
        surname: state.auth.userSurname
    };
};

export default connect(mapStateToProps);


