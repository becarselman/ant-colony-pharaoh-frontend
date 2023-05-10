import { all } from "redux-saga/effects";
import { watchLogin, watchLogout } from "./authSaga";
import { watchForgotPassword } from "./forgotPasswordSaga";

export default function* rootSaga() {
  yield all([watchLogin(), watchLogout(), watchForgotPassword()]);
}
