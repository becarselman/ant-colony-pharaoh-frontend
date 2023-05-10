import { call, put, takeLatest } from 'redux-saga/effects';
import { forgotPasswordSuccess, forgotPasswordError } from '../actions/authActions';
import { sendForgotPasswordRequest } from './forgotPasswordService';

function* forgotPasswordRequest({ payload }) {
  const { email } = payload;
  console.log("aaaaaaaaa");
  try {
    yield call(sendForgotPasswordRequest, email);
    yield put(forgotPasswordSuccess());
  } catch (error) {
    console.error('An error occurred:', error);
    yield put(forgotPasswordError('An error occurred.'));
  }
}

export function* watchForgotPassword() {
  yield takeLatest('FORGOT_PASSWORD_REQUEST', forgotPasswordRequest);
}
