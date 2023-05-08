import axiosInstance from './apiService';
import { passwordRequest, passwordRequestSuccess, passwordRequestError } from '../actions/authActions.js'

const login = (data) => {
  return axiosInstance.post('/login',  data )
    .then((response) => {
      const { token, userId } = response.data;
      localStorage.setItem('accessToken', token);
      return userId;
    })
    .catch((error) => {
      throw error;
    });
};

const sendPasswordResetEmail = (email) => {
  return (dispatch) => {
    dispatch(passwordRequest(email));
    axiosInstance.post('/password-reset', { email })
      .then(() => {
        dispatch(passwordRequestSuccess());
      })
      .catch((error) => {
        dispatch(passwordRequestError(error.message));
      });
  };
};

export default {
  login,
  sendPasswordResetEmail
};
