import { useContext, useEffect, useState } from "react";
import { ImageContext } from "../context/ImageContext";

type PropsType = {
  children: JSX.Element
}

const Jumbutron = ({ children }: PropsType) => {
  const { images } = useContext(ImageContext);
  const [bgUrl, setBgUrl] = useState('src/assets/images/searchBg.jpg')
  


  return (
    <div className={`bg-[url('src/assets/images/searchBg.jpg')] bg-no-repeat flex items-center py-52 relative`} id="my-bgAnimation">
      <div className="max-w-md mx-auto w-full z-10">
        {children}
      </div>
      <div className="layer absolute inset-0 bg-slate-900 opacity-60 "></div>
    </div>
  )
}

export default Jumbutron