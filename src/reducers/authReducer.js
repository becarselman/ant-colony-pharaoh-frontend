import { AUTHENTICATE_USER, LOGOUT_USER } from "../actions/types";
import { actionTypes } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.AUTHENTICATE_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      };
    default:
      return state;
  }
}
