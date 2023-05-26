import axiosInstance from './apiService';
import axios from 'axios';
const URL = process.env.REACT_APP_API_URL;

export const getAllProjects = (page, pageSize, selectedProjectStatus) => {
    const statusQueryParam = selectedProjectStatus !== 'All Projects' ? selectedProjectStatus : '';
    return axiosInstance.get(`${URL}/projects?page=${page}&limit=${pageSize}&projectStatus=${statusQueryParam}`)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            throw error;
        });
};