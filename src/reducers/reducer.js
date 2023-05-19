import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import forgotPasswordReducer from "./forgotPasswordReducer";
import resetPasswordReducer from "./resetPasswordReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  passwordReq: forgotPasswordReducer,
  passwordRes: resetPasswordReducer,
});
