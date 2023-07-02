import axiosInstance from '../../../../../service/apiService';

export const getEmployees = () => {
  return axiosInstance.get('/employee');
};

export const editProject = (projectData) => {
  return axiosInstance.put(`/projects/${projectData.id}`, projectData);
};
