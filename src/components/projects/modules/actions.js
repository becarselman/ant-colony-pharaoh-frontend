import { actionTypes } from "./types";

export const fetchAllProjects = (page, pageSize, selectedProjectStatus, searchInput) => ({
  type: actionTypes.FETCH_ALL_PROJECTS,
  payload: {
    page,
    pageSize,
    selectedProjectStatus,
    searchInput,
  },
});

export const fetchAllProjectsSuccess = (projects, count) => ({
  type: actionTypes.FETCH_ALL_PROJECTS_SUCCESS,
  payload: {
    projects,
    count,
  },
});

export const fetchAllProjectsFailure = (error) => ({
  type: actionTypes.FETCH_ALL_PROJECTS_FAILURE,
  payload: {
    error,
  },
});

export const startLoader = () => ({
  type: actionTypes.START_LOADER,
});

export const stopLoader = () => ({
  type: actionTypes.STOP_LOADER,
});

export const setPageData = (pageData) => ({
  type: 'SET_PAGE_DATA',
  payload: pageData,
});

