import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchAllEmployeesSuccess, fetchAllEmployeesFailure, createProjectSuccess, createProjectFailure } from './actions';
import { fetchAllProjects, closeAddProjectModal } from "../../../modules/actions"
import { getEmployees, createProject } from './service';
import { actionTypes } from "./types";
import { notification } from "antd";


function showSuccessNotification() {
  notification.success({
    message: "Successfully created project",
    description: "The project has been successfully created.",
  });
}

function showErrorNotification() {
  notification.error({
    message: "Project creation failed",
    description: "An error occurred while creating the project.",
  });
}

export const formatData = (name, description, duration, developers, hourlyRate, projectValue, projectStatus, developerOptions) => {
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

function* createProjectSaga(action) {
  try {
    yield call(createProject, action.payload);
    yield put(createProjectSuccess());
    showSuccessNotification(); 
    yield put(fetchAllProjects())
    yield put(closeAddProjectModal())
  } catch (error) {
    yield put(createProjectFailure(error.message));
    showErrorNotification(); 
  }
}

export function* watchFetchEmployees() {
  yield takeEvery(actionTypes.FETCH_ALL_EMPLOYEES_REQUEST, fetchEmployees);
}

export function* watchCreateProject() {
  yield takeEvery(actionTypes.CREATE_PROJECT_REQUEST, createProjectSaga);
}
