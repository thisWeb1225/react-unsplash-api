import Jumbutron from './components/Jumbutron';
import SearchField from './components/SearchField';
import Images from './components/Images';
import { useState } from 'react'
import useFetchImgs from './hooks/useFetchImgs';
import { ImageContext, initValue } from './context/ImageContext';

function App() {
  const [searchText, setSearchText] = useState('cat')
  const { images, isLoading, error, fetchData } = useFetchImgs('cat');

  const value = {
    images,
    isLoading,
    error,
    fetchData,
    searchText,
    setSearchText
  }

  if (images === initValue.images) {
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
