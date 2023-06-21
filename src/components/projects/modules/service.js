import axiosInstance from "../../../service/apiService";
const URL = process.env.REACT_APP_API_URL;

export const getAllProjects = ({ page, pageSize, statusQueryParam, searchQueryParam }) => {
  return axiosInstance.get(`${URL}/projects?page=${page}&limit=${pageSize}&projectStatus=${statusQueryParam}&${searchQueryParam}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};
