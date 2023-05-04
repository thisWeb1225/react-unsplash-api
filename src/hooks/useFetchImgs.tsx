import { useCallback, useEffect, useReducer, useState } from "react";
import fetchUnsplashImgs from "../api/api";
import fetchDataReducer from "../reducer/fetchReducer";



const useFetchImgs = (query: string) => {
  const [images, setImages] = useState([] as any);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  const [state, dispatch] = useReducer(fetchDataReducer, {
    isLoading: false,
    error: null
  })

  const fetchData = useCallback(async (query: string, isSearch: boolean, page: number = 1) => {
    try {
      dispatch({type:'FETCH_INIT'});

      const res = await fetchUnsplashImgs(query, page);
      console.log(res)

      setImages((prev: any[]) => {
        const resultImages = isSearch ? res.data.results : [...prev, ...res.data.results];
        return resultImages;
      });

    } catch (err: any) {
      dispatch({type:'FETCH_FAILURE', payload: err});
    } finally {
      setTimeout(() => dispatch({type:'FETCH_SUCCESS'}), 1000)
    }
  }, [query])

  useEffect(() => {
    let shouldUpdate = true;
    if (shouldUpdate) {
      fetchData(query, true);
    }
    return () => {shouldUpdate = false;}
  }, [fetchData, query])

  return {
    images,
    isLoading: state.isLoading,
    error: state.error,
    page,
    setPage,
    fetchData: (query: string, isSearch: boolean, page: number) => fetchData(query, isSearch, page)
  }
}

export default useFetchImgs;