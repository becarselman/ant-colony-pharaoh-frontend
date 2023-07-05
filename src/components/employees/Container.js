import { connect } from 'react-redux';
import {closeAddEmployeeModal, fetchAllEmployees, openAddEmployeeModal, setPageAndPageSize } from './modules/actions';
import { bindActionCreators } from "redux";


const mapStateToProps = (state) => {
  return {
    dataSource: state.employees.dataSource,
    totalCount: state.employees.totalCount,
    addModalActive: state.employees.addModalActive,
    isLoading: state.employees.isLoading,
    error: state.employees.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
          setPageAndPageSize,
          fetchAllEmployees,
          openAddEmployeeModal,
          closeAddEmployeeModal
      },
      dispatch
    ),
  });

export default connect(mapStateToProps, mapDispatchToProps);


