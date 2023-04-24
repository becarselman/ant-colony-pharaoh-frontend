import { actionTypes } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        isAuthenticated: Object.keys(action.payload).length !== 0,
        user: action.payload
      };
    default:
      return state;
  }
}