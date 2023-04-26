import { all } from "redux-saga/effects";
import { watchLogin, watchLogout } from "./authSaga";

export default function* rootSaga() {
  yield all([watchLogin(), watchLogout()]);
}
