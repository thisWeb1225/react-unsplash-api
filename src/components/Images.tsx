import { useContext } from "react"
import { ImageContext } from "../context/ImageContext"
import Image from "./Image"
import Skeleton from "./Skeleton"

const Images = () => {
  const { images, isLoading, searchText } = useContext(ImageContext)

  return (
    <>
      <h2 className="text-center mt-6 underline text-2xl">Results for {searchText || 'cat'}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
        {
          isLoading
          ? <Skeleton item={10}></Skeleton>
            : images.map((data: any, i: number) => <Image key={i} data={data}></Image>)}
      </div>
    </>
  )
}

export default Images