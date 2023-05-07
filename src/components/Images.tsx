import { useContext, useRef, useEffect, useState } from "react"
import { ImageContext } from "../context/ImageContext"
import { ImgType } from "../reducer/imgsReducer"
import ImagesCol from "./ImagesCol"
import Skeleton from "./Skeleton"


const Images = () => {
  const { searchText } = useContext(ImageContext);
  const [ colNumber, setColNumber ] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setColNumber(1);
      } else if (window.innerWidth < 768){
        setColNumber(2);
      } else if (window.innerWidth < 960) {
        setColNumber(3);
      } else {
        setColNumber(4);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // 初始化變數
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <div className="bg-slate-900">
      <h2 className="text-center underline text-2xl text-slate-50 pt-10">Results for {searchText || 'cat'}</h2>
      <div className="flex flex-wrap justify-center gap-4 w-full px-4 py-4 sm:px-8 lg:px-16">
        <ImagesCol colNumber={colNumber}></ImagesCol>
      </div>
    </div>
  )
}

export default Images