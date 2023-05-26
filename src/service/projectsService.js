import axiosInstance from './apiService';
import axios from 'axios';
const URL = process.env.REACT_APP_API_URL;

export const getAllProjects = (page, pageSize, selectedProjectStatus, searchInput) => {
  const statusQueryParam = selectedProjectStatus !== 'All Projects' ? selectedProjectStatus : '';
  const searchQueryParam = searchInput ? `search[name]=${encodeURIComponent(searchInput)}` : '';

  return axiosInstance.get(`${URL}/projects?page=${page}&limit=${pageSize}&projectStatus=${statusQueryParam}&${searchQueryParam}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};
