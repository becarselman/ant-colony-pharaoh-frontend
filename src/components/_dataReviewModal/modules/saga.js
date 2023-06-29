import { takeLatest, call, put } from 'redux-saga/effects';
import { actionTypes } from './types';
import { fetchProjectSuccess, fetchProjectError, fetchEmployeeSuccess, fetchEmployeeError } from './actions';
import { getEmployeeById, getProjectById } from './service';

function* fetchProjectSaga(action) {
  try {
    const { projectId } = action.payload;

    const response = yield call(getProjectById, projectId);

    const project = response;

    yield put(fetchProjectSuccess(project));

  } catch (error) {
    yield put(fetchProjectError(error.message));
  }
}

function* fetchEmployeeSaga(action) {
  try {
    const { employeeId } = action.payload;
    const response = yield call(getEmployeeById, employeeId);
    const employee = response;
    yield put(fetchEmployeeSuccess(employee));

  } catch(error) {
    yield put(fetchEmployeeError(error.message));
  }
}

export function* watchFetchProject() {
  yield takeLatest(actionTypes.FETCH_PROJECT, fetchProjectSaga);
  yield takeLatest(actionTypes.FETCH_EMPLOYEE, fetchEmployeeSaga);
}
