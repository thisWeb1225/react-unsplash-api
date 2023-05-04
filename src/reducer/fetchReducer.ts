type fetchState = {
  isLoading: boolean,
  error: any,
}

type actionType = {
  type: string,
  payload?: any,
}

const fetchDataReducer = (state: fetchState, action: actionType) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error();
  }
}

export default fetchDataReducer;