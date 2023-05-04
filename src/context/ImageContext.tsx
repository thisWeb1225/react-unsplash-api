import { createContext } from "react";
import { ImgType } from "../reducer/imgsReducer";

type ImageContextType = {
  images: ImgType[],
  oldImages: ImgType[]
  isLoading: boolean,
  error: any,
  fetchData: (query: string, isSearch: boolean, page: number) => Promise<void>,
  page: number,
  searchText: string,
  setSearchText?: React.Dispatch<React.SetStateAction<string>>,
}

// @ts-ignore
export const ImageContext = createContext<ImageContextType>({});