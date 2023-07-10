import { actionTypes } from "./types";

export const fetchAllEmployeesRequest = () => ({
  type: actionTypes.FETCH_ALL_EMPLOYEES_REQUEST,
});

export const fetchAllEmployeesSuccess = (employees) => ({
  type: actionTypes.FETCH_ALL_EMPLOYEES_SUCCESS,
  payload: employees,
});

export const fetchAllEmployeesFailure = (error) => ({
  type: actionTypes.FETCH_ALL_EMPLOYEES_FAILURE,
  payload: error,
});

export const editProjectRequest = (projectData) => ({
  type: actionTypes.EDIT_PROJECT_REQUEST,
  payload: projectData,
});

export const editProjectSuccess = () => ({
  type: actionTypes.EDIT_PROJECT_SUCCESS,
});

export const editProjectFailure = (error) => ({
  type: actionTypes.EDIT_PROJECT_FAILURE,
  payload: error,
});
