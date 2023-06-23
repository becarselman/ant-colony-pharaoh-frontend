import {actionTypes} from "./types";

const initialState = {
    isLoading: false,
    error: null
}

const addEmployeeModalReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SEND_USER_DATA_INIT:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.SEND_USER_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case actionTypes.SEND_USER_DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false
            }
        default:
            return state
    }
}

export default addEmployeeModalReducer