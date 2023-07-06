import { takeLatest, put, call } from 'redux-saga/effects';
import { sendEditUserDataSuccess, sendEditUserDataFailure } from './actions';
import { actionTypes } from "./types";
import { editUser } from "./service";

function* sendEditUserDataSaga(action) {
  try {
    const response = yield call(editUser, action.payload);

    yield put(sendEditUserDataSuccess(response));
  } catch (error) {
    yield put(sendEditUserDataFailure(error.message));
  }
}

export function* watchSendEditUserDataSaga() {
  yield takeLatest(actionTypes.SEND_EDIT_USER_DATA_INIT, sendEditUserDataSaga);
}
