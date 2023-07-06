import { connect } from 'react-redux';
import { openEditEmployeeModal, closeEditEmployeeModal, closeAddEmployeeModal, fetchAllEmployees, openAddEmployeeModal, setPageAndPageSize } from './modules/actions';
import { bindActionCreators } from "redux";


const mapStateToProps = (state) => {
  return {
    dataSource: state.employees.dataSource,
    totalCount: state.employees.totalCount,
    addModalActive: state.employees.addModalActive,
    editModalActive: state.employees.editModalActive,
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
          closeAddEmployeeModal,
          openEditEmployeeModal,
          closeEditEmployeeModal
      },
      dispatch
    ),
  });

export default connect(mapStateToProps, mapDispatchToProps);


