import { actionTypes } from "./types";

export const sendEditUserData = (data) => {
  return {
    type: actionTypes.SEND_EDIT_USER_DATA_INIT,
    payload: data
  }
}

export const sendEditUserDataSuccess = (response) => ({
  type: actionTypes.SEND_EDIT_USER_DATA_SUCCESS,
  payload: {
    response
  },
});

export const sendEditUserDataFailure = (error) => ({
  type: actionTypes.SEND_EDIT_USER_DATA_FAILURE,
  payload: {
    error,
  },
});
