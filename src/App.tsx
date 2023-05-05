import Jumbutron from './components/Jumbutron';
import SearchField from './components/SearchField';
import Images from './components/Images';
import Footer from './components/Footer';
import { useState, useRef, useEffect } from 'react'
import useFetchImgs from './hooks/useFetchImgs';
import { ImageContext } from './context/ImageContext';

function App() {
  const [searchText, setSearchText] = useState('cat');
  const { images, isSearch, isLoading, error, fetchData, page } = useFetchImgs('cat');

  const value = {
    images,
    isLoading,
    error,
    fetchData,
    page,
    searchText,
    setSearchText,
    isSearch,
  }

  return (
    <ImageContext.Provider value={value}>
      <Jumbutron>
        <SearchField></SearchField>
      </Jumbutron>
      <Images></Images>
      <Footer></Footer>
    </ImageContext.Provider>
  )
}

export default App
