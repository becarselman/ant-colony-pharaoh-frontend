import { takeLatest, put, call, select } from 'redux-saga/effects';
import { fetchAllProjectsSuccess, fetchAllProjectsFailure, startLoader, stopLoader } from './actions';
import { actionTypes } from "./types";
import { getAllProjects } from './service';

function generateQueryParams(selectedProjectStatus, searchInput) {
  const statusQueryParam = selectedProjectStatus !== 'All Projects' ? selectedProjectStatus : '';
  const searchQueryParam = searchInput ? `search[name]=${searchInput}` : '';

  return { statusQueryParam, searchQueryParam };
}

const getPageAndPageSize = state => ({
  page: state.projects.pageProjects,
  pageSize: state.projects.pageSizeProjects
})

const getSelectedProjectStatus = state => state.projects.projectStatus

function* fetchAllProjectsSaga(action) {
  try {
    yield put(startLoader()); 

    const { searchInput } = action.payload;

    const selectedProjectStatus = yield select(getSelectedProjectStatus)

    const { statusQueryParam, searchQueryParam } = generateQueryParams(selectedProjectStatus, searchInput);

    const { page, pageSize } = yield select(getPageAndPageSize)

    const response = yield call(getAllProjects, { page, pageSize, statusQueryParam, searchQueryParam });

    const projects = response.data.projects;
    const total = response.data.count;

    const formattedData = projects.map((project, index) => {
      const developers = [];
      const fullTime = [];
    
      project.developers.forEach((developer) => {
        developers.push(`${developer.employee.firstName} ${developer.employee.lastName}`);
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
        developers: developers.join(', ') || '',
        fullTime: fullTime || '',
        hourlyRate: project.hourlyRate || 0,
        projectValue: project.projectValue || 0,
        status: project.projectStatus || '',
      };
    });

    yield put(fetchAllProjectsSuccess(formattedData, total));
  } catch (error) {
    yield put(fetchAllProjectsFailure(error.message));
  } finally {
    yield put(stopLoader()); 
  }
}

export function* watchFetchAllProjects() {
  yield takeLatest(actionTypes.FETCH_ALL_PROJECTS, fetchAllProjectsSaga);
}
