import { useContext, useState } from "react";
import { ImageContext } from "../context/ImageContext"


const SearchField = () => {
  const [searchValue, setSearchValue] = useState('');
  const { fetchData, searchText, setSearchText } = useContext(ImageContext)

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleSearchButton = () => {
    fetchData(searchValue)
    setSearchText!(searchValue)
    setSearchValue("")
  }

  const handleSearchEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      fetchData(searchValue)
      setSearchText!(searchValue)
      setSearchValue("")
    }
  }

  const loadMore = () => {
    fetchData(searchText, false)
  }

  return (
    <div className="flex">
      <input 
        className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
        type="search" 
        placeholder="Search Anything..."
        value={searchValue}
        onChange={handleSearchValue}
        onKeyDown={handleSearchEnter}
        />
        <button 
          className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
          onClick={handleSearchButton}
          disabled={!searchValue}
          >Search</button>
      <button className="bg-pink-200 text-slate-700" onClick={loadMore}>Load More</button>
    </div>
  )
}

export default SearchField;