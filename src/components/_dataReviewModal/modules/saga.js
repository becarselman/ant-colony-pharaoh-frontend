import { takeLatest, call, put } from 'redux-saga/effects';
import { actionTypes } from './types';
import { fetchProjectSuccess, fetchProjectError } from './actions';
import { getProjectById } from './service';

function* fetchProjectSaga(action) {
  try {
    const { projectId } = action.payload;

    const response = yield call(getProjectById, projectId);

    const project = response;
    console.log("saga ", project);

    yield put(fetchProjectSuccess(project));

  } catch (error) {
    yield put(fetchProjectError(error.message));
  }
}

export function* watchFetchProject() {
  yield takeLatest(actionTypes.FETCH_PROJECT, fetchProjectSaga);
}
