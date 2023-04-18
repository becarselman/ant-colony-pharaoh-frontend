import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import authService from '../service/authService';
import { loginSuccess, loginError } from '../actions/authActions';
import { LOGIN_REQUEST, } from '../actions/types';


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
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}


const API_URL = 'http://localhost:3000/';

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

export default {
  login,
  logout,
};
