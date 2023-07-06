import axiosInstance from '../../../../../service/apiService';

export const getEmployees = () => {
  return axiosInstance.get('/employee');
};

export const editProject = (projectData) => {
  const projectId = projectData.id
  delete projectData["id"]
  return axiosInstance.put(`/projects/${projectId}`, projectData);
};
