import { actionTypes } from "../actions/types";

const initialState = {
  loading: false,
  error: null,
};

const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.PASSWORD_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.PASSWORD_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default forgotPasswordReducer;
