import { useCallback, useEffect, useReducer
 } from "react";
import fetchUnsplashImgs from "../api/api";
import fetchDataReducer from "../reducer/fetchReducer";
import imgsReducer, {imgsReducerInitState} from "../reducer/imgsReducer";

const useFetchImgs = (query: string) => {

  const [fetchDataState, fetchDataDispatch] = useReducer(fetchDataReducer, {
    isLoading: false,
    error: null
  })

  const [imgsState, imgsDispatch] = useReducer(imgsReducer, imgsReducerInitState)

  const fetchData = useCallback(async (query: string, isSearch: boolean, page: number = 1) => {
    try {
      fetchDataDispatch({type:'FETCH_INIT'});

      const res = await fetchUnsplashImgs(query, page);
      const imgs = await res.data.results;

      if (isSearch) {
        imgsDispatch({type:'SEARCH', payload: imgs});
      } else {
        imgsDispatch({type:'LOADMORE', payload: imgs});
      }

    } catch (err: any) {
      fetchDataDispatch({type:'FETCH_FAILURE', payload: err});
    } finally {
      fetchDataDispatch({type:'FETCH_SUCCESS'})
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
    images: imgsState.newData,
    isSearch: imgsState.isSearch,
    isLoading: fetchDataState.isLoading,
    error: fetchDataState.error,
    page: imgsState.page,
    fetchData: (query: string, isSearch: boolean, page: number) => fetchData(query, isSearch, page)
  }
}

export default useFetchImgs;