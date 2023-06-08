import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import forgotPasswordReducer from "./forgotPasswordReducer";
import resetPasswordReducer from "./resetPasswordReducer";
import addEmployeeModalReducer from "../components/_addEmployeeModal/modules/reducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  passwordReq: forgotPasswordReducer,
  passwordRes: resetPasswordReducer,
  addEmployeeModal: addEmployeeModalReducer
});
