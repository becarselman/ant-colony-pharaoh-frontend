import { actionTypes } from "../actions/types";

const initialState = {
  emailSent: false,
  error: null,
};

const passwordReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PASSWORD_REQUEST_SUCCESS:
      return { ...state, emailSent: true, error: null };
    case actionTypes.PASSWORD_REQUEST_ERROR:
      return { ...state, emailSent: false, error: action.payload };
    default:
      return state;
  }
};

export default passwordReducer;

  