export type ImgType = {
  id: string,
  urls: {
    regular: string,
    small: string,
  }
  alt_description: string,
}

type ImgsReducerType = {
  newData: ImgType[],
  oldData: ImgType[],
  page: number,
}

type actionType = {
  type: 'SEARCH' | 'LOADMORE',
  payload: ImgType[],
}

export const imgsReducerInitState: ImgsReducerType = {
  newData: [],
  oldData: [],
  page: 1
}

const ImgsReducer = (state: ImgsReducerType, action: actionType) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        newData: action.payload,
        oldData: [],
        page: 2,
      };
    case 'LOADMORE':
      return {
        ...state,
        newData: [...state.newData, ...action.payload],
        oldData: [...state.newData],
        page: state.page + 1,
      };
    default:
      throw new Error(`Error action type: ${action.type}`);
  }
}

export default ImgsReducer;