import { actionTypes } from "../actions/types";

const initialState = {};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}

export const getErrors = (error) => ({
  type: actionTypes.GET_ERRORS,
  payload: error,
});