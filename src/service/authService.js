import axiosInstance from './apiService';

const login = (email, password) => {
  return axiosInstance.post('/login', { email, password })
    .then((response) => {
      const { token, user } = response.data;
      localStorage.setItem('accessToken', token);
      return user;
    });
};

const isLoggedIn = () => {
  return !!localStorage.getItem('accessToken');
};

export default {
  login,
  isLoggedIn,
};
