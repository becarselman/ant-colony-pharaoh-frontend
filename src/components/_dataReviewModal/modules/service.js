import axiosInstance from "../../../service/apiService";

const URL = process.env.REACT_APP_API_URL;

export const getProjectById = (projectId) => {
  return axiosInstance.get(`${URL}/projects/${projectId}`)
    .then(async (response) => {
      const projectData = response.data;
      const employeePromises = projectData.developers
      .map(developers => getEmployeeById(String(developers.employee)));
      const employees = await Promise.all(employeePromises);
      projectData.developers = employees;
      console.log("servis ", projectData);
      return projectData;
    })
    .catch((error) => {
      throw error;
    });
};


export const getEmployeeById = (employeeId) => {
  return axiosInstance.get(`${URL}/employee/${employeeId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};