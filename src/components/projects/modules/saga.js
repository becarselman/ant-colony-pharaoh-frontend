import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchAllProjectsSuccess, fetchAllProjectsFailure } from './actions';
import { actionTypes } from "./types";
import { getAllProjects } from '../../../service/projectsService';

function* fetchAllProjectsSaga(action) {
  try {
    const response = yield call(getAllProjects, action.payload);

    const projects = response.data.projects;
    const total = response.data.count;

    const formattedData = projects.map((project, index) => {
      const developers = [];
      const fullTime = [];
    
      project.developers.forEach((developer) => {
        developers.push(developer.user);
        fullTime.push(developer.fullTime);
      });
    
      const startDateString = new Date(project.duration.from).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
      });
    
      const endDateString = new Date(project.duration.to).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
      });
    
      return {
        key: project._id || index.toString(),
        name: project.name || '',
        description: project.description || '',
        duration: `${startDateString} - ${endDateString}`,
        developers: developers || '',
        fullTime: fullTime || '',
        hourlyRate: project.hourlyRate || 0,
        projectValue: project.projectValue || 0,
        status: project.projectStatus || '',
      };
    });
    

    yield put(fetchAllProjectsSuccess(formattedData, total));
  } catch (error) {
    yield put(fetchAllProjectsFailure(error.message));
  }
}

export function* watchFetchAllProjects() {
  yield takeLatest(actionTypes.FETCH_ALL_PROJECTS, fetchAllProjectsSaga);
}
