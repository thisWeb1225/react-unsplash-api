
type ImageProp = {

}


const image = ({data}: any) => {
  return (
    <a href={data.urls.regular} target="_blank" rel="noreferrer">
      <img className="h-72 w-full object-cover rounded-lg shadow-sm" src={data.urls.small} alt={data.alt_description} />
    </a>
  )
}

export default image;