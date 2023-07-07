import { takeLatest, put, call } from 'redux-saga/effects';
import { sendUserDataSuccess, sendUSerDataFailure } from './actions';
import { actionTypes } from "./types";
import { closeAddEmployeeModal, fetchAllEmployees } from "../../../modules/actions"
import { createUser } from "./service";
import {notification} from "antd";

function showSuccessNotification() {
  notification.success({
    message: "Successfully created employee",
    description: "The employee has been successfully created.",
  });
}

function showErrorNotification(message) {
  notification.error({
    message: "Employee creation failed",
    description: "An error occurred while creating the employee.",
  });
}

function* sendUserDataSaga(action) {
  try {
    const response = yield call(createUser, action.payload);

    yield put(sendUserDataSuccess(response));
    showSuccessNotification()
    yield put(fetchAllEmployees())
    yield put(closeAddEmployeeModal())
  } catch (error) {
    yield put(sendUSerDataFailure(error.message));
    showErrorNotification()
  }
}

export function* watchSendUserDataSaga() {
  yield takeLatest(actionTypes.SEND_USER_DATA_INIT, sendUserDataSaga);
}
