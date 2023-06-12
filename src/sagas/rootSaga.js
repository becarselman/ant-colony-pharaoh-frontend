import {all} from 'redux-saga/effects';
import {watchLogin, watchLogout} from './authSaga';
import {watchForgotPassword} from './forgotPasswordSaga';
import {watchResetPassword} from './resetPasswordSaga';
import {watchFetchAllProjects} from '../components/projects/modules/saga/projectsSaga';
import {watchFetchAllEmployees} from "../components/employees/modules/saga";

export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchLogout(),
        watchForgotPassword(),
        watchResetPassword(),
        watchFetchAllProjects(),
        watchFetchAllEmployees()
    ]);
}
