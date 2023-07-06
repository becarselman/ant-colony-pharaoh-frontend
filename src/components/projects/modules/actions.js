import { actionTypes } from "./types";

export const setPageAndPageSize = (page, pageSize) => ({
  type: actionTypes.SET_PAGE_AND_PAGE_SIZE_PROJECTS,
  payload: {
    page,
    pageSize
  }
})

export const fetchAllProjects = (searchInput) => ({
  type: actionTypes.FETCH_ALL_PROJECTS,
  payload: {
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

export const openAddProjectModal = () => ({
  type: actionTypes.OPEN_ADD_PROJECT_MODAL
})

export const closeAddProjectModal = () => ({
  type: actionTypes.CLOSE_ADD_PROJECT_MODAL
})

export const openEditProjectModal = () => ({
  type: actionTypes.OPEN_EDIT_PROJECT_MODAL
})

export const closeEditProjectModal = () => ({
  type: actionTypes.CLOSE_EDIT_PROJECT_MODAL
})

export const changeProjectTableStatus = (newStatus) => ({
  type: actionTypes.CHANGE_PROJECT_TABLE_STATUS,
  payload: newStatus
})