import { all } from 'redux-saga/effects';
import { watchLogin, watchLogout } from './authSaga';
import { watchForgotPassword } from './forgotPasswordSaga';
import { watchResetPassword } from './resetPasswordSaga';
import { watchFetchAllProjects, watchCreateProject } from '../components/projects/modules/saga/projectsSaga';
import { watchEditProject } from "../components/projects/components/EditProjectsModal/modules/saga";
import { watchSendUserDataSaga } from "../components/employees/components/AddEmployeeModal/modules/saga";
import { watchFetchEmployees } from '../components/projects/components/AddProjectsModal/modules/saga';
import {watchSendEditUserDataSaga} from "../components/employees/components/EditEmployeeModal/modules/saga";

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchLogout(),
    watchForgotPassword(),
    watchResetPassword(),
    watchFetchAllProjects(),
    watchCreateProject(),
    watchSendUserDataSaga(),
    watchSendEditUserDataSaga(),
    watchFetchEmployees(),
    watchEditProject()
  ]);
}
