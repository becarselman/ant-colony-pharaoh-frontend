import { takeLatest, put, call } from 'redux-saga/effects';
import { sendEditUserDataSuccess, sendEditUserDataFailure } from './actions';
import { fetchAllEmployees, closeEditEmployeeModal } from "../../../modules/actions"
import { actionTypes } from "./types";
import { editUser } from "./service";
import {notification} from "antd";

function showSuccessNotification() {
  notification.success({
    message: "Successfully edited employee",
    description: "The employee has been successfully edited.",
  });
}

function showErrorNotification() {
  notification.error({
    message: "Failed to edit employee",
    description: "An error occurred while editing the employee.",
  });
}

function* sendEditUserDataSaga(action) {
  try {
    const response = yield call(editUser, action.payload);

    yield put(sendEditUserDataSuccess(response));
    showSuccessNotification()
    yield put(fetchAllEmployees())
    yield put(closeEditEmployeeModal())
  } catch (error) {
    yield put(sendEditUserDataFailure(error.message));
    showErrorNotification()
  }
}

export function* watchSendEditUserDataSaga() {
  yield takeLatest(actionTypes.SEND_EDIT_USER_DATA_INIT, sendEditUserDataSaga);
}
