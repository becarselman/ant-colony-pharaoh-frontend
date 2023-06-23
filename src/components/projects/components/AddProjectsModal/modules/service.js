import axiosInstance from '../../../../../service/apiService';

export const getEmployees = () => {
  return axiosInstance.get('/employee');
};

export const createProject = (projectData) => {
  return axiosInstance.post('/projects', projectData);
};
