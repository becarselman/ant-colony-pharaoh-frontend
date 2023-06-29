import { actionTypes } from "./types";

export const fetchProject = (projectId) => ({
  type: actionTypes.FETCH_PROJECT,
  payload: {
    projectId,
  },
});

export const fetchProjectError = (error) => ({
  type: actionTypes.FETCH_PROJECT_ERROR,
  payload: {
    error,
  },
});

export const fetchProjectSuccess = (project) => ({
  type: actionTypes.FETCH_PROJECT_SUCCESS,
  payload: {
    project,
  }
});

