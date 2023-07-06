import { actionTypes } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  userId: "",
  userName: "",
  userSurname: ""
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        isAuthenticated: Object.keys(action.payload).length !== 0,
        userId: action.payload.id,
        userName: action.payload.name,
        userSurname: action.payload.surname
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      };
    default:
      return state;
  }
}