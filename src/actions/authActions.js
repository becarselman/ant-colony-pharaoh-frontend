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
  type: actionTypes.LOGIN_SUCCESS,
  payload: userId,
});

export const setUser = (data) => ({
  type: actionTypes.SET_USER,
  payload: data
})

export const loginError = (error) => ({
  type: actionTypes.LOGIN_ERROR,
  payload: error,
});

export const loginRequest = (data) => ({ 
  type: actionTypes.AUTHENTICATE_USER_REQUEST,
  payload: data,
});

export const getErrors = (errors) => ({
  type: actionTypes.GET_ERRORS,
  payload: errors,
});

export const passwordRequest = (email) => ({
  type: actionTypes.PASSWORD_REQUEST,
  payload: email,
})

export const passwordRequestSuccess = () => ({
  type: actionTypes.PASSWORD_REQUEST_SUCCESS,
});

export const passwordRequestError = (error) => ({
  type: actionTypes.PASSWORD_REQUEST_ERROR,
  payload: error,
});

export const resetPasswordRequest = (token, newPassword) => ({
  type: actionTypes.RESET_PASSWORD_REQUEST,
  payload: {
    token,
    newPassword,
  },
});

export const resetPasswordSuccess = () => ({
  type: actionTypes.RESET_PASSWORD_SUCCESS,
});

export const resetPasswordError = (error) => ({
  type: actionTypes.RESET_PASSWORD_ERROR,
  payload: error,
});
