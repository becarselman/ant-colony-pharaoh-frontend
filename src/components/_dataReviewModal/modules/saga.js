import { takeLatest, call, put } from 'redux-saga/effects';
import { actionTypes } from './types';
import { fetchProjectSuccess, fetchProjectError } from './actions';
import { getProjectById, deleteProject } from './service';
import {notification} from "antd";

function showSuccessNotification() {
  notification.success({
    message: "Successfully deleted project",
    description: "The project has been successfully deleted.",
  });
}

function showErrorNotification() {
  notification.error({
    message: "Failed to delete project",
    description: "An error occurred while deleting the project.",
  });
}

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

function* deleteProjectSaga(action) {
  try {
    const {projectId} = action.payload

    const response = yield call(deleteProject, projectId)
    showSuccessNotification()
  }
  catch(err) {
    showErrorNotification()
  }
}


export function* watchFetchProject() {
  yield takeLatest(actionTypes.FETCH_PROJECT, fetchProjectSaga);
}

export function* watchDeleteProject() {
  yield takeLatest(actionTypes.DELETE_PROJECT, deleteProjectSaga)
}
