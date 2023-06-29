import { actionTypes } from "./types";

const initialState = {
  project: null,
  loading: false,
  error: null,
};

const dataReviewModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROJECT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        project: action.payload.project,
        error: null,
      };
    case actionTypes.FETCH_PROJECT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    
    case actionTypes.FETCH_EMPLOYEE:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        employee: action.payload.employee,
        error: null,
      };
    case actionTypes.FETCH_EMPLOYEE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default dataReviewModalReducer;
