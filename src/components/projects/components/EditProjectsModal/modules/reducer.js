import { actionTypes } from "./types";

const initialState = {
  employees: [],
  isLoading: false,
  error: null,
};

const editProjectsModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_EMPLOYEES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actionTypes.FETCH_ALL_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employees: action.payload,
        isLoading: false,
        error: null,
      };
    case actionTypes.FETCH_ALL_EMPLOYEES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actionTypes.EDIT_PROJECT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actionTypes.EDIT_PROJECT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case actionTypes.EDIT_PROJECT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default editProjectsModalReducer;
