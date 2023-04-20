import { createContext } from "react";

type ImageContextType = {
  images: any,
  isLoading: boolean,
  error: any,
  fetchData: (query: string, isSearch?: boolean) => Promise<void>,
  searchText: string,
  setSearchText?: React.Dispatch<React.SetStateAction<string>>
}

export const initValue = {
  images: [],
  isLoading: false,
  error: null,
  fetchData: async () => { },
  searchText: '',
  setSearchText: () => { }
}

export const ImageContext = createContext<ImageContextType>(initValue);