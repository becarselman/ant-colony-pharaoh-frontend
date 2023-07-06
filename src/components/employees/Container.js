import { connect } from 'react-redux';
import { fetchAllEmployees } from './modules/actions';
import { bindActionCreators } from "redux";


const mapStateToProps = (state) => {
  return {
    dataSource: state.employees.dataSource,
    totalCount: state.employees.totalCount,
    isLoading: state.employees.isLoading,
    error: state.employees.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
          fetchAllEmployees,
      },
      dispatch
    ),
  });

export default connect(mapStateToProps, mapDispatchToProps);


