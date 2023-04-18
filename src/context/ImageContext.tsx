import { createContext } from "react";

type ImageContextType = {
  response: any,
  isLoading: boolean,
  error: any,
  fetchData: (url: string) => Promise<void>,
  searchText: string,
  setSearchText?: React.Dispatch<React.SetStateAction<string>>
}

export const initValue = {
  response: [],
  isLoading: false,
  error: null,
  fetchData: async () => { },
  searchText: '',
  setSearchText: () => { }
}

export const ImageContext = createContext<ImageContextType>(initValue);