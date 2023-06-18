import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchAllEmployeesSuccess, fetchAllEmployeesFailure, createProjectSuccess, createProjectFailure } from './actions';
import { getEmployees, createProject } from './service';
import { actionTypes } from "./types";

function* fetchEmployees() {
  try {
    const response = yield call(getEmployees);
    yield put(fetchAllEmployeesSuccess(response.data));
  } catch (error) {
    yield put(fetchAllEmployeesFailure(error.message));
  }
}

function* createProjectSaga(action) {
  try {
    yield call(createProject, action.payload);
    yield put(createProjectSuccess());
  } catch (error) {
    yield put(createProjectFailure(error.message));
  }
}

export function* watchFetchEmployees() {
  yield takeEvery(actionTypes.FETCH_ALL_EMPLOYEES_REQUEST, fetchEmployees);
}

export function* watchCreateProject() {
  yield takeEvery(actionTypes.CREATE_PROJECT_REQUEST, createProjectSaga);
}
