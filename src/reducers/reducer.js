import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import forgotPasswordReducer from "./forgotPasswordReducer";
import resetPasswordReducer from "./resetPasswordReducer";
import projectsReducer from '../components/projects/modules/reducer'; 
import customTableReducer from '../components/Table/modules/reducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  passwordReq: forgotPasswordReducer,
  passwordRes: resetPasswordReducer,
  projects: projectsReducer, 
  customTable: customTableReducer, 
});
