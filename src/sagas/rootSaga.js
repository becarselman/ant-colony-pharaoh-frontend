import { all } from 'redux-saga/effects';
import { watchLogin, watchLogout } from './authSaga';
import { watchForgotPassword } from './forgotPasswordSaga';
import { watchResetPassword } from './resetPasswordSaga';
import { watchFetchAllProjects } from '../components/projects/modules/saga/projectsSaga'; 

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchLogout(),
    watchForgotPassword(),
    watchResetPassword(),
    watchFetchAllProjects(),
  ]);
}
