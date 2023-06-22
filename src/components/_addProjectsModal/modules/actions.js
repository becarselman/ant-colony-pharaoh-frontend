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

export const createProjectRequest = (projectData) => ({
  type: actionTypes.CREATE_PROJECT_REQUEST,
  payload: projectData,
});

export const createProjectSuccess = () => ({
  type: actionTypes.CREATE_PROJECT_SUCCESS,
});

export const createProjectFailure = (error) => ({
  type: actionTypes.CREATE_PROJECT_FAILURE,
  payload: error,
});
