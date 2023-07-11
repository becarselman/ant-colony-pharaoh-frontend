import { takeLatest, call, put } from 'redux-saga/effects';
import { actionTypes } from './types';
import { fetchEmployeeSuccess, fetchEmployeeError } from './actions';
import { getEmployeeById } from './service';

function* fetchEmployeeSaga(action) {
  try {
    const { employeeId } = action.payload;

    const response = yield call(getEmployeeById, employeeId);
    const employee = response;

    yield put(fetchEmployeeSuccess(employee));

  } catch (error) {
    yield put(fetchEmployeeError(error.message));
  }
}

export function* watchFetchEmployee() {
  yield takeLatest(actionTypes.FETCH_EMPLOYEE, fetchEmployeeSaga);
}
