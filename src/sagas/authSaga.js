import { put, call, takeLatest } from "redux-saga/effects";
import { actionTypes } from "../actions/types";
import authService from "../service/authService";
import {
  loginSuccess,
  loginError,
  loginRequest,
  getErrors,
} from "../actions/authActions";
import axiosInstance from './../utilis/axiosInterceptor';

function* loginSaga(action) {
  yield put(loginRequest());
  try {
    const { email, password } = action.payload;
    const response = yield call(authService.login, { email, password });
    const { token, user } = response;
    localStorage.setItem("jwtToken", token);
    yield put(loginSuccess(user)); 
  } catch (error) {
    yield put(loginError(error.response.data)); 
    yield put(getErrors(error.response.data)); 
  }
}

export function* watchLogin() {
  yield takeLatest(actionTypes.AUTHENTICATE_USER, loginSaga);
}
