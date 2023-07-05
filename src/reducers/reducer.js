import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import forgotPasswordReducer from "./forgotPasswordReducer";
import resetPasswordReducer from "./resetPasswordReducer";
import addEmployeeModalReducer from "../components/employees/components/AddEmployeeModal/modules/reducer";
import projectsReducer from '../components/projects/modules/reducer';
import customTableReducer from '../components/Table/modules/reducer';
import employeesReducer from "../components/employees/modules/reducer";
import projectsModalReducer from "../components/projects/components/AddProjectsModal/modules/reducer";
import projectReducer from "../components/_dataReviewModal/modules/projectReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  passwordReq: forgotPasswordReducer,
  passwordRes: resetPasswordReducer,
  addEmployeeModal: addEmployeeModalReducer,
  employees: employeesReducer,
  projects: projectsReducer,
  customTable: customTableReducer,
  projectsModal: projectsModalReducer, 
  project: projectReducer,
});
