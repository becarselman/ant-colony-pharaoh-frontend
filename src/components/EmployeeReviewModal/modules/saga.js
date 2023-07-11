import { takeLatest, call, put } from 'redux-saga/effects';
import { actionTypes } from './types';
import { fetchEmployeeSuccess, fetchEmployeeError } from './actions';
import {deleteEmployee} from "./service";
import { getEmployeeById } from './service';
import {notification} from "antd";

function showSuccessNotification() {
  notification.success({
    message: "Successfully deleted employee",
    description: "The employee has been successfully deleted.",
  });
}

function showErrorNotification() {
  notification.error({
    message: "Failed to delete employee",
    description: "An error occurred while deleting the employee.",
  });
}


function* fetchEmployeeSaga(action) {
  try {
    const { employeeId } = action.payload;

    const response = yield call(getEmployeeById, employeeId);
    const employee = response;

    yield put(fetchEmployeeSuccess(employee));

  } catch (error) {
    yield put(fetchEmployeeError(error.message));
  }
}

function* deleteEmployeeSaga(action) {
  try {
    const {employeeId} = action.payload

    const response = yield call(deleteEmployee, employeeId)
    showSuccessNotification()
  }
  catch(err) {
    showErrorNotification()
  }
}

export function* watchFetchEmployee() {
  yield takeLatest(actionTypes.FETCH_EMPLOYEE, fetchEmployeeSaga);
}

export function* watchDeleteEmployee() {
  yield takeLatest(actionTypes.DELETE_EMPLOYEE, deleteEmployeeSaga)
}