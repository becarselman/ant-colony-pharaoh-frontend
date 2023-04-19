import { put, call, takeLatest } from "redux-saga/effects";
import { actionTypes } from "../actions/types";
import authService from "../service/authService";
import {
  loginSuccess,
  loginError,
  loginRequest,
  getErrors,
} from "../actions/authActions";

function* loginSaga(action) {
  try {
    const response = yield call(authService.login, action.payload);
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
