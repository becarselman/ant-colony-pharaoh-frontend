import { takeLatest, put, call } from 'redux-saga/effects';
import { sendUserDataSuccess, sendUSerDataFailure } from './actions';
import { actionTypes } from "./types";
import { createUser } from "./service";

function* sendUserDataSaga(action) {
  try {
    const response = yield call(createUser, action.payload);

    yield put(sendUserDataSuccess(response));
  } catch (error) {
    yield put(sendUSerDataFailure(error.message));
  }
}

export function* watchSendUserDataSaga() {
  yield takeLatest(actionTypes.SEND_USER_DATA_INIT, sendUserDataSaga);
}
