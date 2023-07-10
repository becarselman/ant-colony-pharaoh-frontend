import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchAllEmployeesSuccess, fetchAllEmployeesFailure, editProjectSuccess, editProjectFailure } from './actions';
import { fetchAllProjects, closeEditProjectModal } from "../../../modules/actions"
import { getEmployees, editProject } from './service';
import { actionTypes } from "./types";
import { notification } from "antd";


function showSuccessNotification() {
  notification.success({
    message: "Successfully edited project",
    description: "The project has been successfully edited.",
  });
}

function showErrorNotification() {
  notification.error({
    message: "Failed to edit project",
    description: "An error occurred while editing the project.",
  });
}

export const formatData = (id, name, description, duration, developers, hourlyRate, projectValue, projectStatus, developerOptions) => {
    const formattedDevelopers = developers.map((developerId) => {
      const selectedDeveloper = developerOptions.find((option) => option.value === developerId);
      if (!selectedDeveloper) {
        return null;
      }
      return {
        employee: selectedDeveloper.employee._id,
        fullTime: true,
    };
  });

  return {
    id,
    name,
    description,
    duration,
    developers: formattedDevelopers,
    hourlyRate,
    projectValue,
    projectStatus,
  };
};

function* fetchEmployees() {
  try {
    const response = yield call(getEmployees);
    yield put(fetchAllEmployeesSuccess(response.data));
  } catch (error) {
    yield put(fetchAllEmployeesFailure(error.message));
  }
}

function* editProjectSaga(action) {
  try {
    yield call(editProject, action.payload);
    yield put(editProjectSuccess());
    showSuccessNotification(); 
    yield put(fetchAllProjects())
    yield put(closeEditProjectModal())
  } catch (error) {
    yield put(editProjectFailure(error.message));
    showErrorNotification(); 
  }
}

export function* watchFetchEmployees() {
  yield takeEvery(actionTypes.FETCH_ALL_EMPLOYEES_REQUEST, fetchEmployees);
}

export function* watchEditProject() {
  yield takeEvery(actionTypes.EDIT_PROJECT_REQUEST, editProjectSaga);
}
