import { call, put, takeLatest } from 'redux-saga/effects';
import { forgotPasswordSuccess, forgotPasswordError } from '../actions/authActions';
import { sendForgotPasswordRequest } from './forgotPasswordService';

function* forgotPasswordRequest({ payload }) {
  const { email } = payload;
  try {
    yield call(sendForgotPasswordRequest, email);
    yield put(forgotPasswordSuccess());
  } catch (error) {
    yield put(forgotPasswordError(error));
  }
}

export function* watchForgotPassword() {
  yield takeLatest('FORGOT_PASSWORD_REQUEST', forgotPasswordRequest);
}
