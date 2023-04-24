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
    console.log(action.payload, 123)
    const { email, password } = action.payload;
    const response = yield call(authService.login, { email, password });
    const { token, userId } = response;
    localStorage.setItem("accessToken", token);
    yield put(loginSuccess(userId)); 
  } catch (error) {
    console.log(error);
    yield put(loginError(error.response.data)); 
    yield put(getErrors(error.response.data)); 
  } 
}


export function* watchLogin() {
  yield takeLatest(actionTypes.AUTHENTICATE_USER_REQUEST, loginSaga);
}
