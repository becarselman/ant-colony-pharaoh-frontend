import axiosInstance from './apiService';
import axios from 'axios';

const URL = process.env.REACT_APP_API_URL;

const login = (data) => {
  return axiosInstance.post('/login',  data )
    .then((response) => {
      const { token, userId } = response.data;
      localStorage.setItem('accessToken', token);
      return userId;
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
  console.log(token)
  console.log(newPassword)
  try {
    console.log("we are here", URL)
    const response = await axios.post(`${URL}reset-password/${token}`, { newPassword }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("after axios post", response)

    if (response.status === 200) {
      console.log("did it");
      return { success: true };
    } else {
      const errorData = response.data;
      console.log("did not");
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
