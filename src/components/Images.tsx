import { useContext, useRef, useEffect } from "react"
import { ImageContext } from "../context/ImageContext"
import { ImgType } from "../reducer/imgsReducer"
import ImagesCol from "./ImagesCol"
import Skeleton from "./Skeleton"


const Images = () => {
  const { searchText } = useContext(ImageContext);
  // const oldData = useRef<ImgType[]>([]);

  // useEffect(() => {
  //   oldData.current = images;
  // }, [images])

  return (
    <>
      <h2 className="text-center mt-6 underline text-2xl">Results for {searchText || 'cat'}</h2>
      <div className="flex flex-wrap justify-center gap-4 my-10 w-full px-4">
        <ImagesCol colNumber={4}></ImagesCol>
      </div>
    </>
  )
}

export default Images