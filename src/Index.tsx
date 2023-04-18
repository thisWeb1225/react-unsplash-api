import Jumbutron from './components/Jumbutron';
import SearchField from './components/SearchField';
import Images from './components/Images';
import { useState } from 'react'
import useAxios from './hooks/useAxios';
import { ImageContext, initValue } from './context/ImageContext';

function App() {
  const [searchText, setSearchText] = useState('')
  const { response, isLoading, error, fetchData } = useAxios(`/search/photos?page=1&query=cat&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchText,
    setSearchText
  }

  if (response === initValue.response) {
    return <div>Loading ...</div>
  }

  return (
    <ImageContext.Provider value={value}>
      <Jumbutron>
        <SearchField></SearchField>
      </Jumbutron>
      <Images></Images>
    </ImageContext.Provider>
  )
}

export default App
