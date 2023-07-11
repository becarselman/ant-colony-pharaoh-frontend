import axiosInstance from './apiService';
import axios from 'axios';

const URL = process.env.REACT_APP_API_URL;

const login = (data) => {
  return axiosInstance.post('/login',  data )
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error;
    });
};

export async function sendForgotPasswordRequest(email) {
  try {
    const response = await axiosInstance.post('/forgot-password', { email });

    if (response.status === 200) {
      return { success: true };
    } else {
      const errorData = response.data;
      throw new Error(errorData.error);
    }
  } catch (error) {
    throw new Error('An error occurred.');
  }
}

export async function resetPasswordRequest(token, newPassword) {
  try {
    const data = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ newPassword }),
    }

    const response = await fetch(`${URL}/reset-password/${token}`, data)

    if (response.ok) {
      return { success: true };
    } else {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }
  } catch (error) {
    throw new Error('An error occurred.');
  }
}

export default {
  login,
  sendForgotPasswordRequest,
  resetPasswordRequest
};
