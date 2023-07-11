import { actionTypes } from "./types";

export const fetchEmployee = (employeeId) => ({
  type: actionTypes.FETCH_EMPLOYEE,
  payload: {
    employeeId,
  },
});

export const deleteEmployee = (employeeId) => ({
  type: actionTypes.DELETE_EMPLOYEE,
  payload: {
    employeeId
  }
})

export const fetchEmployeeError = (error) => ({
  type: actionTypes.FETCH_EMPLOYEE_ERROR,
  payload: {
    error,
  },
});

export const fetchEmployeeSuccess = (employee) => ({
  type: actionTypes.FETCH_EMPLOYEE_SUCCESS,
  payload: {
    employee,
  }
});
