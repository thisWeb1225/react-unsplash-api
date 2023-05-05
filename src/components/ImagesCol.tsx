import { useContext } from "react"
import { ImageContext } from "../context/ImageContext"
import Image from "./Image"
import Skeleton from "./Skeleton"
import chunk from "../lib/chunk"

type PropsType = {
  colNumber: number
}

const ImagesCol = ({ colNumber }: PropsType) => {
  const { images, isLoading } = useContext(ImageContext);
  const chunkedImages = chunk(images, colNumber)

  let content;

  if (isLoading) {
    content = (
      <>
        {chunkedImages.map((val: any[]) => (
          <div className="flex flex-col gap-4 flex-1">
            {val.map((data: any, i: number) => <Image key={i} data={data}></Image>)}
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
          </div>
        ))}
      </>
    )
  } else {
    content = (
      <>
        {chunkedImages.map((val: any[]) => (
          <div className="flex flex-col gap-4 flex-1">
            {val.map((data: any, i: number) => <Image key={i} data={data}></Image>)}
          </div>
        ))}
      </>
    )
  }


  return content
}

export default ImagesCol