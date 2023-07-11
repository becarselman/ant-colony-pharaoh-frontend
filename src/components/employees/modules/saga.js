import { takeLatest, put, call, select } from 'redux-saga/effects';
import { fetchAllEmployeesSuccess, fetchAllEmployeesFailure } from './actions';
import { actionTypes } from "./types";
import { getAllEmployees } from './service';

const getPageAndPageSize = state => ({
  page: state.employees.pageEmployees,
  pageSize: state.employees.pageSizeEmployees
})

function generateQueryParams(selectedEmployeeStatus, searchInput) {
  const statusQueryParam = selectedEmployeeStatus !== 'All Employees' ? selectedEmployeeStatus : '';
  const searchQueryParam = searchInput ? `search=${searchInput}` : '';

  return { statusQueryParam, searchQueryParam };
}

function* fetchAllEmployeesSaga(action) {
  try {
    const { selectedEmployeeStatus, searchInput } = action.payload;

    const { statusQueryParam, searchQueryParam } = generateQueryParams(selectedEmployeeStatus, searchInput);

    const {page, pageSize} = yield select(getPageAndPageSize)

    const response = yield call(getAllEmployees, { page, pageSize, statusQueryParam, searchQueryParam });

    const employees = response.data.employees;
    const total = response.data.count;

    const formattedData = employees.map((employee, index) => {
      return {
        key: employee._id || index.toString(),
        name: employee.firstName || '',
        surname: employee.lastName || '',
        department: employee.department || '',
        salary: employee.monthlySalary || 0,
        stack: employee.techStack || 'N/A'
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
