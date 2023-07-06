import {actionTypes} from "./types";

const initialState = {
    dataSource: [],
    totalCount: 0,
    addModalActive: false,
    editModalActive: false,
    pageEmployees: 1,
    pageSizeEmployees: 10,
    isLoading: false,
    error: null,
};

const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PAGE_AND_PAGE_SIZE_EMPLOYEES:
            return {
                ...state,
                pageEmployees: action.payload.page,
                pageSizeEmployees: action.payload.pageSize
            }
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
        case actionTypes.OPEN_ADD_EMPLOYEE_MODAL:
            return {
                ...state,
                addModalActive: true
            }
        case actionTypes.CLOSE_ADD_EMPLOYEE_MODAL:
            return {
                ...state,
                addModalActive: false
            }
        case actionTypes.OPEN_EDIT_EMPLOYEE_MODAL:
            return {
                ...state,
                editModalActive: true
            }
        case actionTypes.CLOSE_EDIT_EMPLOYEE_MODAL:
            return {
                ...state,
                editModalActive: false
            }

        default:
            return state;
    }
};

export default employeesReducer;
