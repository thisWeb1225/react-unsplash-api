import { useContext, useState, useRef, useEffect } from "react";
import { ImageContext } from "../context/ImageContext"


const SearchField = () => {
  const [searchValue, setSearchValue] = useState('');
  const { fetchData, searchText, setSearchText, page, noMoreImg } = useContext(ImageContext)

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleSearchButton = () => {
    fetchData(searchValue, true, 1);
    setSearchText!(searchValue);
    setSearchValue("");
  }

  const handleSearchEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      fetchData(searchValue, true, 1);
      setSearchText!(searchValue);
      setSearchValue("");
    }
  }

  const observer = useRef<IntersectionObserver>();
  useEffect(() => {
    let shouldUpdated = true;
    const loadMore = () => {
      fetchData(searchText, false, page + 1);
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && shouldUpdated && !noMoreImg) {
            loadMore()
        }

        if (noMoreImg) {
          observer.current!.disconnect();
        }
      }
    ), {};

    observer.current.observe(document.querySelector('.footer')!);

    return () => {
      if (observer.current) observer.current.disconnect();
      shouldUpdated = false;
    }
  }, [searchText, page])

  return (
    <div className="flex gap-4 text-xs px-4 flex-col sm:flex-row">
      <input
        className="bg-gray-50  w-full px-4 py-3 outline-none rounded"
        type="search"
        placeholder="Search Anything..."
        value={searchValue}
        onChange={handleSearchValue}
        onKeyDown={handleSearchEnter}
      />
      <button
        className="bg-slate-900 px-6 py-3 text-white rounded hover:bg-slate-800 duration-[400ms]"
        onClick={handleSearchButton}
        disabled={!searchValue}
      >Search</button>
    </div>
  )
}

export default SearchField;