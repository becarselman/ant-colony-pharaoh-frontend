import axiosInstance from './../utilis/axiosInterceptor';

const login = (email, password) => {
  return axiosInstance.post('/login', { email, password })
    .then((response) => {
      const { token, user } = response.data;
      localStorage.setItem('jwtToken', token);
      return user;
    });
};

const logout = () => {
  localStorage.removeItem('jwtToken');
};

const isLoggedIn = () => {
  return !!localStorage.getItem('jwtToken');
};

export default {
  login,
  logout,
  isLoggedIn,
};
