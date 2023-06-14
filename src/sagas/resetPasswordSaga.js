import { call, put, takeLatest } from 'redux-saga/effects';
import { resetPasswordSuccess, resetPasswordError } from '../actions/authActions';
import { resetPasswordRequest } from '../service/authService';
import { actionTypes } from '../actions/types';
import { notification } from 'antd';

const { open } = notification;

function* resetPassword({ payload }) {
  const { token, newPassword } = payload;
  try {
    yield call(resetPasswordRequest, token, newPassword);
    yield put(resetPasswordSuccess());
    yield call(open, {
      message: 'Success',
      description: 'Your password has been reset.',
      type: 'success',
    });
  } catch (error) {
    yield put(resetPasswordError(error));
    yield call(open, {
      message: 'Error',
      description: 'An error occurred. Please try reseting your password again.',
      type: 'error',
    });
  }
}
export function* watchResetPassword() {
  yield takeLatest(actionTypes.RESET_PASSWORD_REQUEST, resetPassword);
}
