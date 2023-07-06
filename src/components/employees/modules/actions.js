import { actionTypes } from "./types";

export const fetchAllEmployees = (page, pageSize, selectedEmployeeStatus, searchInput) => ({
  type: actionTypes.FETCH_ALL_EMPLOYEES,
  payload: {
    page,
    pageSize,
    selectedEmployeeStatus,
    searchInput,
  },
});

export const fetchAllEmployeesSuccess = (employees, count) => ({
  type: actionTypes.FETCH_ALL_EMPLOYEES_SUCCESS,
  payload: {
    employees,
    count,
  },
});

export const fetchAllEmployeesFailure = (error) => ({
  type: actionTypes.FETCH_ALL_EMPLOYEES_FAILURE,
  payload: {
    error,
  },
});

export const setPageData = (pageData) => ({
  type: actionTypes.SET_PAGE_DATA,
  payload: pageData,
});

