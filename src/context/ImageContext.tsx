import { createContext } from "react";

type ImageContextType = {
  images: [any],
  isLoading: boolean,
  error: any,
  fetchData: (query: string, isSearch: boolean, page: number) => Promise<void>,
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  searchText: string,
  setSearchText?: React.Dispatch<React.SetStateAction<string>>,
}

// @ts-ignore
export const ImageContext = createContext<ImageContextType>({});