import { all } from 'redux-saga/effects';
import { watchLogin, watchLogout } from './authSaga';
import { watchForgotPassword } from './forgotPasswordSaga';
import { watchResetPassword } from './resetPasswordSaga';
import { watchFetchAllProjects, watchCreateProject } from '../components/projects/modules/saga/projectsSaga';
import { watchSendUserDataSaga } from "../components/_addEmployeeModal/modules/saga";
import { watchFetchEmployees } from '../components/_addProjectsModal/modules/saga';

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchLogout(),
    watchForgotPassword(),
    watchResetPassword(),
    watchFetchAllProjects(),
    watchCreateProject(),
    watchSendUserDataSaga(),
    watchFetchEmployees(),
  ]);
}
