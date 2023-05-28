import { call, put, takeLatest, all } from 'redux-saga/effects';
import { getAllProjects } from '../service/projectsService';
import {
  actionTypes
} from '../components/projects/modules/types';
import {
  fetchProjectsSuccess,
  fetchProjectsFailure,
  fetchProjectsRequest, 
} from '../components/projects/modules/actions';


function* fetchProjectsSaga(action) {
  const { page, pageSize, selectedProjectStatus, searchInput } = action.payload;

  try {
    const response = yield call(
      getAllProjects,
      page,
      pageSize,
      selectedProjectStatus,
      searchInput
    );

    const projects = response.data.projects;
    const total = response.data.count;

    const formattedData = projects.map((project, index) => {
      const developers = project.developers.map((developer) => developer.user);
      const fullTime = project.developers.map((developer) => developer.fullTime);
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
        developers: developers.join(', ') || '',
        fullTime: fullTime.join(', ') || '',
        hourlyRate: project.hourlyRate || 0,
        projectValue: project.projectValue || 0,
        status: project.projectStatus || '',
      };
    });

    yield put(fetchProjectsSuccess(formattedData, total));
  } catch (error) {
    yield put(fetchProjectsFailure(error));
  } finally {
    yield put(fetchProjectsRequest()); // Dodano: Pokretanje fetchProjectsRequest akcije
  }
}

function* watchFetchProjects() {
  yield takeLatest(actionTypes.FETCH_PROJECTS_REQUEST, fetchProjectsSaga);
}

export function* projectsSaga() {
  yield all([watchFetchProjects()]);
}
