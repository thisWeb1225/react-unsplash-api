import { useContext, useRef, useEffect, useState } from "react"
import { ImageContext } from "../context/ImageContext"
import ImagesCol from "./ImagesCol"

const Images = () => {
  const { searchText, noMoreImg } = useContext(ImageContext);
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
    <div className="bg-slate-900 px-4 py-4 sm:px-8 lg:px-16">
      <h2 className="font-bold text-md text-slate-50 py-10">{searchText.toUpperCase() || 'mountains'}</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <ImagesCol colNumber={colNumber}></ImagesCol>
      </div>
      {noMoreImg 
      ? (<p className="text-slate-50 text-center pb-20">There are no more images, you can search a new keyword！ </p>)
      : <></> 
      }
    </div>
  )
}

export default Images