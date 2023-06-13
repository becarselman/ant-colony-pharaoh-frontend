import { actionTypes } from "./types";

export const sendUserData = (data) => {
  return {
    type: actionTypes.SEND_USER_DATA_INIT,
    payload: data
  }
}

export const sendUserDataSuccess = (response) => ({
  type: actionTypes.SEND_USER_DATA_SUCCESS,
  payload: {
    response
  },
});

export const sendUSerDataFailure = (error) => ({
  type: actionTypes.SEND_USER_DATA_FAILURE,
  payload: {
    error,
  },
});
