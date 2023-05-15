import { call, put, takeLatest } from 'redux-saga/effects';
import { resetPasswordSuccess, resetPasswordError } from '../actions/authActions';
import { resetPasswordRequest } from '../service/authService';
import { actionTypes } from '../actions/types';

function* resetPassword({ payload }) {
  const { token, newPassword } = payload;
  try {
    yield call(resetPasswordRequest, token, newPassword);
    yield put(resetPasswordSuccess());
  } catch (error) {
    yield put(resetPasswordError(error));
  }
}
export function* watchResetPassword() {
  yield takeLatest(actionTypes.RESET_PASSWORD_REQUEST, resetPassword);
}
