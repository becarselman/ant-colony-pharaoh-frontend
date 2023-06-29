import { actionTypes } from "./types";

export const fetchProject = (projectId) => ({
  type: actionTypes.FETCH_PROJECT,
  payload: {
    projectId,
  },
});

export const fetchProjectError = (error) => ({
  type: actionTypes.FETCH_PROJECT_ERROR,
  payload: {
    error,
  },
});

export const fetchProjectSuccess = (project) => ({
  type: actionTypes.FETCH_PROJECT_SUCCESS,
  payload: {
    project,
  }
});

export const fetchEmployee = (employeeId) => ({
  type: actionTypes.FETCH_EMPLOYEE,
  payload: {
    employeeId,
  }
});

export const fetchEmployeeSuccess = (employee) => ({
  type: actionTypes.FETCH_EMPLOYEE_SUCCESS,
  payload: {
    employee,
  }
});

export const fetchEmployeeError = (error) => ({
  type: actionTypes.FETCH_EMPLOYEE_ERROR,
  payload: {
    error,
  }
});
