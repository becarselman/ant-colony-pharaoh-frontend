import { all } from "redux-saga/effects";
import { watchLogin, watchLogout } from "./authSaga";
import { watchForgotPassword } from "./forgotPasswordSaga";
import { watchResetPassword } from "./resetPasswordSaga";
import { watchSendUserDataSaga } from "../components/_addEmployeeModal/modules/saga";

export default function* rootSaga() {
  yield all([watchLogin(), watchLogout(), watchForgotPassword(), watchResetPassword(), watchSendUserDataSaga()]);
}
