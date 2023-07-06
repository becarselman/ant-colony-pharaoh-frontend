import {actionTypes} from "./types";

const initialState = {
    dataSource: [],
    totalCount: 0,
    isLoading: false,
    error: null,
};

const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_EMPLOYEES:
            return {
                ...state,
                isLoading: true,
            };
        case actionTypes.FETCH_ALL_EMPLOYEES_SUCCESS:
            return {
                ...state,
                dataSource: action.payload.employees,
                totalCount: action.payload.count,
                isLoading: false,
            };
        case actionTypes.FETCH_ALL_EMPLOYEES_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false,
            };
        case actionTypes.SET_PAGE_DATA:
            return {
                ...state,
                pageData: action.payload,
            };

        default:
            return state;
    }
};

export default employeesReducer;
