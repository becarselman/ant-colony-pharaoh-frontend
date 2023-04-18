import { takeLatest, put, call } from 'redux-saga/effects';
import authService from '../service/authService';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/types';

function* login(action) {
  try {
    const response = yield call(authService.login, action.payload.email, action.payload.password);
    localStorage.setItem('token', response.data.token);
    yield put({ type: LOGIN_SUCCESS });
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, payload: error.response.data });
  }
}

function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
}

export default authSaga;
