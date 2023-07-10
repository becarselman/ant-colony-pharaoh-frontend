import { actionTypes } from "./types"

const initialState = {
  dataSource: [],
  totalCount: 0,
  addModalActive: false,
  editModalActive: false,
  pageProjects: 1,
  pageSizeProjects: 10,
  projectStatus: "All Projects",
  isLoading: false,
  error: null,
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PAGE_AND_PAGE_SIZE_PROJECTS:
      return {
        ...state,
        pageProjects: action.payload.page,
        pageSizeProjects: action.payload.pageSize
      }
    case 'FETCH_ALL_PROJECTS':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_ALL_PROJECTS_SUCCESS':
      return {
        ...state,
        dataSource: action.payload.projects,
        totalCount: action.payload.count,
        isLoading: false,
      };
    case 'FETCH_ALL_PROJECTS_FAILURE':
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    case 'START_LOADER':
      return {
        ...state,
        isLoading: true,
      };
    case 'STOP_LOADER':
      return {
        ...state,
        isLoading: false,
      };
    case 'SET_PAGE_DATA':
      return {
        ...state,
        pageData: action.payload,
      };
    case actionTypes.OPEN_ADD_PROJECT_MODAL:
      return {
        ...state,
        addModalActive: true
      }
    case actionTypes.CLOSE_ADD_PROJECT_MODAL:
      return {
        ...state,
        addModalActive: false
      }
    case actionTypes.OPEN_EDIT_PROJECT_MODAL:
      return {
        ...state,
        editModalActive: true
      }
    case actionTypes.CLOSE_EDIT_PROJECT_MODAL:
      return {
        ...state,
        editModalActive: false
      }
    case actionTypes.CHANGE_PROJECT_TABLE_STATUS:
      return {
        ...state,
        projectStatus: action.payload
      }

    default:
      return state;
  }
};

export default projectsReducer;
