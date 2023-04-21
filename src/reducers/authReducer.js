import { actionTypes } from "../actions/types";
import authService from "../service/authService";
import { getErrors } from "./errorReducer";

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

export const setUser = (userId) => ({
  type: actionTypes.SET_USER,
  payload: userId
});

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await authService.login(email, password);
    const { token, userId } = response;
    localStorage.setItem("accessToken", token);
    dispatch(setUser(userId));
  } catch (error) {
    dispatch(getErrors(error.response.data));
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("accessToken");
  dispatch(setUser({}));
};
