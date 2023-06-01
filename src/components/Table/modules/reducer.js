const initialState = {
    pageData: null,
    totalCount: 0,
    pageSize: 10, 
  };
  
  const customTableReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PAGE_DATA':
        return {
          ...state,
          pageData: action.payload,
        };
      case 'SET_TOTAL_COUNT':
        return {
          ...state,
          totalCount: action.payload,
        };
      case 'SET_PAGE_SIZE':
        return {
          ...state,
          pageSize: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default customTableReducer;
  