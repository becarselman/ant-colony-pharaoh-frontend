import { call, put, takeLatest } from 'redux-saga/effects';
import { passwordRequestSuccess, passwordRequestError } from '../actions/authActions';
import { sendForgotPasswordRequest } from '../service/authService';
import { actionTypes } from '../actions/types';

function* forgotPasswordRequest({ payload }) {
  const { email } = payload;
  try {
    yield call(sendForgotPasswordRequest, email);
    yield put(passwordRequestSuccess());
  } catch (error) {
    yield put(passwordRequestError(error));
  }
}

export function* watchForgotPassword() {
  yield takeLatest(actionTypes.PASSWORD_REQUEST, forgotPasswordRequest);
}
