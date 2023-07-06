import { connect } from 'react-redux';
import { fetchAllProjects } from './modules/actions';
import { bindActionCreators } from "redux";


const mapStateToProps = (state) => {
  return {
    dataSource: state.projects.dataSource,
    totalCount: state.projects.totalCount,
    isLoading: state.projects.isLoading,
    error: state.projects.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
          fetchAllProjects,
      },
      dispatch
    ),
  });

export default connect(mapStateToProps, mapDispatchToProps);


