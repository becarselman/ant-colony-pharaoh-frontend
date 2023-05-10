import axiosInstance from './apiService';

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


export default {
  login,
  sendForgotPasswordRequest
};
