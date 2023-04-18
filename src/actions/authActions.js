import { actionTypes } from "./types";

export const loginUser = (email, password) => {
  return {
    type: actionTypes.AUTHENTICATE_USER,
    payload: {
      email,
      password,
    },
  };
};

export const logoutUser = () => {
  return {
    type: actionTypes.LOGOUT_USER,
  };
};

export const loginSuccess = (user) => {
  return {
    type: actionTypes.AUTHENTICATE_USER_SUCCESS,
    payload: user,
  };
};

export const loginError = (error) => {
  return {
    type: actionTypes.AUTHENTICATE_USER_ERROR,
    payload: error,
  };
};

export const loginRequest = () => {
  return {
    type: actionTypes.AUTHENTICATE_USER_REQUEST,
  };
};

export const getErrors = (errors) => {
  return {
    type: actionTypes.GET_ERRORS,
    payload: errors,
  };
};
