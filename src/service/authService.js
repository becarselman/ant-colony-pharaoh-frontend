import axiosInstance from './apiService';

const login = (data) => {
  return axiosInstance.post('/login',  data )
    .then((response) => {
      const { token, userId } = response.data;
      localStorage.setItem('accessToken', token);
      return userId;
    });
};

export default {
  login,
};
