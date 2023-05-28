import { actionTypes } from "./types";

export const fetchProjectsRequest = (page, pageSize, selectedProjectStatus, searchInput) => {
  return {
    type: actionTypes.FETCH_PROJECTS_REQUEST,
    payload: {
      page,
      pageSize,
      selectedProjectStatus,
      searchInput,
    },
  };
};

export const fetchProjectsSuccess = (projects, total) => {
  return {
    type: actionTypes.FETCH_PROJECTS_SUCCESS,
    payload: {
      projects,
      total,
    },
  };
};


export const fetchProjectsFailure = (error) => {
  return {
    type: actionTypes.FETCH_PROJECTS_FAILURE,
    payload: error,
  };
};
