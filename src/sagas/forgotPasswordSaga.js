import { call, put, takeLatest } from 'redux-saga/effects';
import { passwordRequestSuccess, passwordRequestError } from '../actions/authActions';
import { sendForgotPasswordRequest } from '../service/authService';
import { actionTypes } from '../actions/types';
import { notification } from 'antd';

const { open } = notification;

function* forgotPasswordRequest({ payload }) {
  const { email } = payload;
  try {
    yield call(sendForgotPasswordRequest, email);
    yield put(passwordRequestSuccess());
    yield call(open, {
      message: 'Success',
      description: 'Email sent. Check your inbox.',
      type: 'success',
    });
  } catch (error) {
    yield put(passwordRequestError(error));
    yield call(open, {
      message: 'Error',
      description: 'Email not sent. Please provide valid email address.',
      type: 'error',
    });
  }
}

export function* watchForgotPassword() {
  yield takeLatest(actionTypes.PASSWORD_REQUEST, forgotPasswordRequest);
}
