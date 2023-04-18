import { AUTHENTICATE_USER, GET_ERRORS, LOGOUT_USER, LOGIN_ERROR, LOGIN_REQUEST } from "./types";
import authService from "../service/authService";

export const authenticateUser = (email, password) => dispatch => {
  authService.login(email, password)
    .then(response => {
      const { token, user } = response;
      localStorage.setItem("jwtToken", token);
      dispatch({  
        type: AUTHENTICATE_USER,
        payload: user
      });
    })
    .catch(error => {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data
      });
    });
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwtToken");
  dispatch({
    type: LOGOUT_USER,
  });
};

export const loginSuccess = (response) => {
  return {
    type: AUTHENTICATE_USER,
    payload: response
  };
};

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    payload: error
  };
};

export const loginRequest = () => {
    return {
      type: LOGIN_REQUEST,
    };
};

export const getErrors = (errors) => {
  return {
    type: GET_ERRORS,
    payload: errors
  };
};
