import { createContext } from "react";
import { ImgType } from "../reducer/imgsReducer";

type ImageContextType = {
  images: ImgType[],
  isLoading: boolean,
  error: any,
  fetchData: (query: string, isSearch: boolean, page: number) => Promise<void>,
  page: number,
  noMoreImg: boolean,
  searchText: string,
  setSearchText?: React.Dispatch<React.SetStateAction<string>>,
  isSearch: boolean,
}

// @ts-ignore
export const ImageContext = createContext<ImageContextType>({});