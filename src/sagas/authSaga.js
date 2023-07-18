import { put, call, takeLatest } from "redux-saga/effects";
import { actionTypes } from "../actions/types";
import authService from "../service/authService";
import { notification } from "antd";
import {
  loginSuccess,
  loginError,
  getErrors,
  setUser
} from "../actions/authActions";

const { open } = notification;

function* loginSaga(action) {
  try {
    const response = yield call(authService.login, action.payload);
    const { token, userId, name, surname } = response;
    localStorage.setItem("accessToken", token);
    yield put(loginSuccess(userId));
    yield put(setUser( {
      id: userId,
      name,
      surname
    } ))
    action.payload.navigate('/dashboard');
  } catch (error) {
    yield put(loginError(error.response.data));
    yield put(getErrors(error.response.data));
    yield call(open, {
      message: 'Error',
      description: 'Your email or password is incorrect. Try again.',
      type: 'error',
    });
  }
}

export function* watchLogin() {
  yield takeLatest(actionTypes.AUTHENTICATE_USER_REQUEST, loginSaga);
}

