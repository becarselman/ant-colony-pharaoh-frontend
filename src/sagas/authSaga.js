import { put, call, takeLatest } from "redux-saga/effects";
import { actionTypes } from "../actions/types";
import authService from "../service/authService";
import {
  loginSuccess,
  loginError,
  getErrors,
} from "../actions/authActions";

function* loginSaga(action) {
  try {
    const response = yield call(authService.login, action.payload);
    const { token, userId } = response;
    localStorage.setItem("accessToken", token);
    yield put(loginSuccess(userId));
  } catch (error) {
    yield put(loginError(error.response.data));
    yield put(getErrors(error.response.data));
  }
}

function* logoutSaga() {
  try {
    // logic here
    // ...
  } catch (error) {
    // logout errors
    // ...
  }
}

export function* watchLogin() {
  yield takeLatest(actionTypes.AUTHENTICATE_USER_REQUEST, loginSaga);
}

export function* watchLogout() {
  yield takeLatest(actionTypes.LOGOUT_REQUEST, logoutSaga);
}
