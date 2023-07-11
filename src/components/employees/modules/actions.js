import { actionTypes } from "./types";


export const setPageAndPageSize = (page, pageSize) => ({
  type: actionTypes.SET_PAGE_AND_PAGE_SIZE_EMPLOYEES,
  payload: {
    page,
    pageSize
  }
})
export const fetchAllEmployees = (selectedEmployeeStatus, searchInput) => ({
  type: actionTypes.FETCH_ALL_EMPLOYEES,
  payload: {
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

export const openAddEmployeeModal = () => ({
  type: actionTypes.OPEN_ADD_EMPLOYEE_MODAL
})

export const closeAddEmployeeModal = () => ({
  type: actionTypes.CLOSE_ADD_EMPLOYEE_MODAL
})

export const openEditEmployeeModal = () => ({
  type: actionTypes.OPEN_EDIT_EMPLOYEE_MODAL
})

export const closeEditEmployeeModal = () => ({
  type: actionTypes.CLOSE_EDIT_EMPLOYEE_MODAL
})