import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers/reducer";
import { watchLogin } from "../sagas/authSaga";
import { watchForgotPassword } from "../sagas/forgotPasswordSaga";
import { watchResetPassword } from "../sagas/resetPasswordSaga";
import { watchSendUserDataSaga } from "../components/employees/components/AddEmployeeModal/modules/saga";
import { watchSendEditUserDataSaga } from "../components/employees/components/EditEmployeeModal/modules/saga";
import { watchFetchAllProjects } from "../components/projects/modules/saga";
import {composeWithDevTools} from "@redux-devtools/extension";
import { watchFetchEmployees } from "../components/projects/components/AddProjectsModal/modules/saga";
import { watchFetchAllEmployees } from '../components/employees/modules/saga'
import { watchCreateProject } from "../components/projects/components/AddProjectsModal/modules/saga";
import { watchEditProject } from "../components/projects/components/EditProjectsModal/modules/saga";

const persistConfig = {
  key: "root", 
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export const persistor = persistStore(store);

sagaMiddleware.run(watchLogin);
sagaMiddleware.run(watchForgotPassword);
sagaMiddleware.run(watchResetPassword);
sagaMiddleware.run(watchSendUserDataSaga);
sagaMiddleware.run(watchSendEditUserDataSaga);
sagaMiddleware.run(watchFetchAllProjects);
sagaMiddleware.run(watchFetchAllEmployees)
sagaMiddleware.run(watchFetchEmployees);
sagaMiddleware.run(watchCreateProject);
sagaMiddleware.run(watchEditProject);
