import { actionTypes } from "./types";

export const loginUser = (email, password) => ({
  type: actionTypes.AUTHENTICATE_USER,
  payload: {
    email,
    password,
  },
});

export const logoutUser = () => ({
  type: actionTypes.LOGOUT_USER,
});

export const loginSuccess = (userId) => ({
  type: actionTypes.AUTHENTICATE_USER_SUCCESS,
  payload: userId,
});

export const loginError = (error) => ({
  type: actionTypes.AUTHENTICATE_USER_ERROR,
  payload: error,
});

export const loginRequest = () => ({
  type: actionTypes.AUTHENTICATE_USER_REQUEST,
  payload: null,
});

export const getErrors = (errors) => ({
  type: actionTypes.GET_ERRORS,
  payload: errors,
});
