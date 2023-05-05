const image = ({ data }: any) => {
  return (
    <a href={data.urls.regular} target="_blank" rel="noreferrer">
        <img className="h-auto w-full object-cover rounded-lg shadow-sm" src={data.urls.small} alt={data.alt_description} />
      </a>
  )
}

export default image;