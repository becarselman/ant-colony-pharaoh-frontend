import axiosInstance from './apiService';

const login = (email, password) => {
  return axiosInstance.post('/login', { email, password })
    .then((response) => {
      const { token, user } = response.data;
      localStorage.setItem('accessToken', token);
      return user;
    });
};

export default {
  login,
};
