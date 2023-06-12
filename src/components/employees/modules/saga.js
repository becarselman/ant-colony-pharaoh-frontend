import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchAllEmployeesSuccess, fetchAllEmployeesFailure } from './actions';
import { actionTypes } from "./types";
import { getAllEmployees } from "./service"

function generateQueryParams(selectedEmployeeStatus, searchInput) {
  const statusQueryParam = selectedEmployeeStatus !== 'All Employees' ? selectedEmployeeStatus : '';
  const searchQueryParam = searchInput ? `search[name]=${searchInput}` : '';

  return { statusQueryParam, searchQueryParam };
}

function* fetchAllEmployeesSaga(action) {
  try {
    const { page, pageSize, selectedEmployeeStatus, searchInput } = action.payload;

    const { statusQueryParam, searchQueryParam } = generateQueryParams(selectedEmployeeStatus, searchInput);

    const response = yield call(getAllEmployees, { page, pageSize, statusQueryParam, searchQueryParam });

    const employees = response.data.users;
    const total = employees.length;

    const formattedData = employees.map((employee, index) => {
      return {
        key: employee._id || index.toString(),
        name: employee.name || '',
        surname: employee.surname || '',
        department: employee.department || '',
        salary: employee.salary || 0,
        stack: employee.stack || 'N/A'
      };
    });

    yield put(fetchAllEmployeesSuccess(formattedData, total));
  } catch (error) {
    yield put(fetchAllEmployeesFailure(error.message));
  }
}

export function* watchFetchAllEmployees() {
  yield takeLatest(actionTypes.FETCH_ALL_EMPLOYEES, fetchAllEmployeesSaga);
}
