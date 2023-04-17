import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});
