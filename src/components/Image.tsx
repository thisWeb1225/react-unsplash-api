const image = ({ data }: any) => {
  return (
    <div className="overflow-hidden relative group">
      <a href={data.urls.regular} target="_blank" rel="noreferrer">
        <img className="h-auto w-full object-cover rounded-lg shadow-sm" src={data.urls.small} alt={data.alt_description} />
      </a>
        <p className="absolute bottom-0 left-0 right-0 text-sm/4 p-2 p-y text-slate-300 bg-gradient-to-b from-black/10 to-black/90 duration-500 translate-y-32 group-hover:translate-y-0">{data.alt_description}</p>
    </div>
    
  )
}

export default image;