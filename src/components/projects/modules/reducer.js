const initialState = {
  dataSource: [],
  totalCount: 0,
  isLoading: false,
  error: null,
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL_PROJECTS':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_ALL_PROJECTS_SUCCESS':
      return {
        ...state,
        dataSource: action.payload.projects,
        totalCount: action.payload.count,
        isLoading: false,
      };
    case 'FETCH_ALL_PROJECTS_FAILURE':
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
      case 'START_LOADER':
  return {
    ...state,
    isLoading: true,
  };
case 'STOP_LOADER':
  return {
    ...state,
    isLoading: false,
  };

    default:
      return state;
  }
};

export default projectsReducer;
