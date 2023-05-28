import { SET_PROJECTS, SET_LOADING } from './projectsActions';

const initialState = {
  dataSource: [],
  page: 1,
  pageSize: 10,
  totalCount: 0,
  isLoading: false,
  selectedProjectStatus: 'All Projects',
  searchInput: '',
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return {
        ...state,
        dataSource: action.payload.projects,
        totalCount: action.payload.total,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default projectsReducer;
