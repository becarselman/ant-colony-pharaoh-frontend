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
import employeeReducer from "../components/EmployeeReviewModal/modules/employeeReducer";
import editEmployeeModalReducer from "../components/employees/components/EditEmployeeModal/modules/reducer";
import editProjectsModalReducer from "../components/projects/components/EditProjectsModal/modules/reducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  passwordReq: forgotPasswordReducer,
  passwordRes: resetPasswordReducer,
  addEmployeeModal: addEmployeeModalReducer,
  editEmployeeModal: editEmployeeModalReducer,
  employees: employeesReducer,
  projects: projectsReducer,
  customTable: customTableReducer,
  project: projectReducer,
  employee: employeeReducer,
  projectsModal: projectsModalReducer,
  editProjectsModal: editProjectsModalReducer,
});
