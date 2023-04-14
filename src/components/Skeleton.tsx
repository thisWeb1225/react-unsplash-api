type PropsType = {
  item: number
}

const Skeleton = ({item}: PropsType) => {
  return (
    <>
    {
      Array(item).fill(undefined).map((_, i) => (
        <div className="animate-pulse" key={i}>
          <div className="bg-gray-300 rounded-lg h-72"></div>
        </div>
      ))
    }
    </>
  )
}

export default Skeleton;