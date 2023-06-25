import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const userToken = localStorage.getItem('accessToken');
    if (userToken) {
      config.headers.Authorization = `Bearer ${userToken}`;
    }
    config.headers['Content-Type'] = 'application/json'; 
    return config;
  },
  (error) => Promise.reject(error),
);


axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('accessToken');
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
