import axiosInstance from "../../../service/apiService";

const URL = process.env.REACT_APP_API_URL;

export const getEmployeeById = (employeeId) => {
  return axiosInstance.get(`${URL}/employee/${employeeId}`)
    .then(async (response) => {
      const employee = response.data;

      const projectsResponse = await getAllProjects();

      const projects = projectsResponse.data.filter(project =>
        project.projectStatus === "Active" && 
        project.developers.some(developer => developer.employee === employeeId)
      );

      const employeeWithProjects = {
        ...employee,
        projects: projects.map(project => ({
          name: project.name,
          employmentType: getEmploymentType(project.developers, employeeId)
        }))
      };

      return employeeWithProjects;
    })
    .catch((error) => {
      throw error;
    });
};

export const deleteEmployee = (employeeId) => {
  return axiosInstance.delete(`/employee/${employeeId}`)
    .then(res => {
      return res
    })
    .catch(err => {
      throw err
    })
}

function getEmploymentType(developers, employeeId) {
  const developer = developers.find(dev => dev.employee === employeeId);
  return developer ? developer.employmentType : null;
}

export const getAllProjects = () => {
  return axiosInstance.get(`${URL}/projects/all`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    })
}
