import axiosInstance from '../../../service/apiService';
//FIXME: fix URL in apiservice
const URL = "http://localhost:5000";

export const getAllEmployees = ({ page, pageSize, statusQueryParam, searchQueryParam }) => {
  return axiosInstance.get(`${URL}/users?page=${page}&size=${pageSize}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};
