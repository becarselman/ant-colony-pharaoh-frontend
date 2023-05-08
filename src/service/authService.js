import axiosInstance from './apiService';

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
  return axiosInstance.post('/forgot-password', { email })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default {
  login,
  sendPasswordResetEmail
};
