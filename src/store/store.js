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
import {watchDeleteProject, watchFetchProject} from "../components/_dataReviewModal/modules/saga";
import { watchFetchEmployee, watchDeleteEmployee } from "../components/EmployeeReviewModal/modules/saga";
import { watchEditProject } from "../components/projects/components/EditProjectsModal/modules/saga";

const persistConfig = {
  key: "root", 
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({ trace: false, traceLimit: 25 })

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

export const persistor = persistStore(store);

sagaMiddleware.run(watchLogin);
sagaMiddleware.run(watchForgotPassword);
sagaMiddleware.run(watchResetPassword);
sagaMiddleware.run(watchSendUserDataSaga);
sagaMiddleware.run(watchSendEditUserDataSaga);
sagaMiddleware.run(watchFetchAllProjects);
sagaMiddleware.run(watchFetchEmployees);
sagaMiddleware.run(watchCreateProject);
sagaMiddleware.run(watchFetchProject);
sagaMiddleware.run(watchDeleteProject);
sagaMiddleware.run(watchFetchEmployee);
sagaMiddleware.run(watchDeleteEmployee);
sagaMiddleware.run(watchEditProject);
sagaMiddleware.run(watchFetchAllEmployees)

