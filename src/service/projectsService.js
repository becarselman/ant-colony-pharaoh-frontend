import axiosInstance from './apiService';
import axios from 'axios';
const URL = process.env.REACT_APP_API_URL;

export const getAllProjects = (page, pageSize) => {
    return axiosInstance.get(`${URL}/projects?page=${page}&limit=${pageSize}`)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            throw error;
        });
};