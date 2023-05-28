import {
  actionTypes
} from '../components/projects/modules/types';

const initialState = {
  projects: [],
  total: 0,
  loading: false,
  error: null,
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROJECTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload.projects,
        total: action.payload.total,
        loading: false,
        error: null,
      };
    case actionTypes.FETCH_PROJECTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default projectsReducer;
