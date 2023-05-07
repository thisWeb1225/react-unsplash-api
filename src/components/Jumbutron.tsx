type PropsType = {
  children: JSX.Element
}

const Jumbutron = ({ children }: PropsType) => {
  return (
    <div className="bg-[url('src/assets/images/searchBg.jpg')] bg-no-repeat bg-cover bg-center flex items-center py-52 relative">
      <div className="max-w-md mx-auto w-full z-10">
        <h1 className="text-white text-center text-xl font-bold mb-4">Find Images</h1>
        {children}
      </div>
      <div className="layer absolute inset-0 bg-slate-900 opacity-80 "></div>
    </div>
  )
}

export default Jumbutron