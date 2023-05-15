import { actionTypes } from "../actions/types";

const initialState = {
  loading: false,
  error: null,
};

const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.RESET_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default resetPasswordReducer;
