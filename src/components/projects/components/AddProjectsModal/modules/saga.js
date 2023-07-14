import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchAllEmployeesSuccess,
  fetchAllEmployeesFailure,
  createProjectSuccess,
  createProjectFailure,
} from './actions';
import { fetchAllProjects, closeAddProjectModal } from '../../../modules/actions';
import { getEmployees, createProject } from './service';
import { actionTypes } from './types';
import { notification } from 'antd';
import * as Errors from './errors'; 

function showSuccessNotification(message, description) {
  notification.success({
    message,
    description,
    style: {
      fontSize: '20px',
    },
  });
}

function showErrorNotification(message, description) {
  notification.error({
    message,
    description,
    style: {
      fontSize: '16px',
    },
  });
}

export const formatData = (
  name,
  description,
  duration,
  developers,
  hourlyRate,
  projectValue,
  projectStatus,
  developerOptions,
) => {
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
    const {
      name,
      description,
      duration,
      developers,
      hourlyRate,
      projectValue,
      projectStatus,
      developerOptions,
    } = action.payload;

    const errors = [];

    if (!name) {
      errors.push(Errors.NAME_REQUIRED);
    }
    if (!description) {
      errors.push(Errors.DESCRIPTION_REQUIRED);
    }
    if (!duration.from || !duration.to) {
      errors.push(Errors.DURATION_REQUIRED);
    }
    if (developers.length === 0) {
      errors.push(Errors.DEVELOPERS_REQUIRED);
    }
    if (!hourlyRate) {
      errors.push(Errors.HOURLY_RATE_REQUIRED);
    } else if (hourlyRate < 0) {
      errors.push(Errors.HOURLY_RATE_POSITIVE);
    }
    if (!projectValue) {
      errors.push(Errors.PROJECT_VALUE_REQUIRED);
    } else if (projectValue < 0) {
      errors.push(Errors.PROJECT_VALUE_POSITIVE);
    }

    if (errors.length > 0) {
      showErrorNotification('Project creation failed', errors.join('\n'));
      yield put(createProjectFailure(errors.join('\n')));
      return;
    }

    yield call(createProject, action.payload);
    yield put(createProjectSuccess());
    showSuccessNotification('Successfully created project', 'The project has been successfully created.');
    yield put(fetchAllProjects());
    yield put(closeAddProjectModal());
  } catch (error) {
    yield put(createProjectFailure(error.message));
    showErrorNotification('Project creation failed', 'An error occurred while creating the project.');
  }
}



export function* watchFetchEmployees() {
  yield takeEvery(actionTypes.FETCH_ALL_EMPLOYEES_REQUEST, fetchEmployees);
}

export function* watchCreateProject() {
  yield takeEvery(actionTypes.CREATE_PROJECT_REQUEST, createProjectSaga);
}
