import Departments from "../utils/Departments";
import {actionTypes} from "./types";

const initialState = {
    email: "",
    password: "",
    name: "",
    surname: "",
    department: Departments[0],
    salary: 0,
    stack: [],
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
            return initialState
        case actionTypes.SEND_USER_DATA_FAILURE:
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state
    }
}

export default addEmployeeModalReducer