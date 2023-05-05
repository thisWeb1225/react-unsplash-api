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
  page: number,
  isSearch: boolean
}

type actionType = {
  type: 'SEARCH' | 'LOADMORE',
  payload: ImgType[],
}

export const imgsReducerInitState: ImgsReducerType = {
  newData: [],
  page: 1,
  isSearch: true
}

const ImgsReducer = (state: ImgsReducerType, action: actionType) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        newData: action.payload,
        page: 2,
        isSearch: true,
      };
    case 'LOADMORE':
      return {
        ...state,
        newData: [...state.newData, ...action.payload],
        page: state.page + 1,
        isSearch: false,
      };
    default:
      throw new Error(`Error action type: ${action.type}`);
  }
}

export default ImgsReducer;