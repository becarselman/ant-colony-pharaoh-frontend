import { actionTypes } from "./types";

const initialState = {
  employee: null,
  loading: false,
  error: null,
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case actionTypes.DELETE_EMPLOYEE:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
};

export default employeeReducer;
