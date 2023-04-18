import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import authService from '../service/authService';
import { loginSuccess, loginError } from '../actions/authActions';
import { LOGIN_REQUEST } from '../actions/types';
import { actionTypes } from '../actions/types';

function* loginSaga(action) {
  try {
    const { email, password } = action.payload;
    const response = yield call(authService.login, email, password);
    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(loginError(error.response.data));
  }
}

export function* watchAuth() {
  yield takeLatest(actionTypes.LOGIN_REQUEST, loginSaga);
}

const API_URL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use(
  config => {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      config.headers.Authorization = `Bearer ${userToken}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

const login = (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('userToken', response.data.token);
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('userToken');
};

const isLoggedIn = () => {
  return !!localStorage.getItem('userToken');
};

export default {
  login,
  logout,
  isLoggedIn,
};
