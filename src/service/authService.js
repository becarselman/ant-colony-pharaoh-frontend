import axiosInstance from './apiService';

const login = (email, password) => {
  return axiosInstance.post('/login', { email, password })
    .then((response) => {
      const { token, userId } = response.data;
      localStorage.setItem('accessToken', token);
      return userId;
    });
};

export default {
  login,
};
