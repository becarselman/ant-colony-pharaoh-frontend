import { put, call, takeLatest } from "redux-saga/effects";
import { actionTypes } from "../actions/types";
import authService from "../service/authService";
import {
  loginSuccess,
  loginError,
  loginRequest,
  getErrors,
} from "../actions/authActions";

export function* loginSaga(action) {
  yield put(loginRequest());
  try {
    const response = yield call(
      authService.login,
      action.payload.email,
      action.payload.password
    );
    const { token, user } = response;
    localStorage.setItem("jwtToken", token);
    yield put(loginSuccess(user)); 
  } catch (error) {
    yield put(loginError(error.response.data)); 
    yield put(getErrors(error.response.data)); 
  }
}

export function* logoutSaga() {
  localStorage.removeItem("jwtToken");
}

export function* watchLogin() {
  yield takeLatest(actionTypes.AUTHENTICATE_USER, loginSaga);
}

export function* watchLogout() {
  yield takeLatest(actionTypes.LOGOUT_USER, logoutSaga);
}
