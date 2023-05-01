import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import fetchUnsplashImgs from "../api/api";

const useFetchImgs = (query: string) => {
  const [images, setImages] = useState([] as any);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (query: string, isSearch: boolean, page: number = 1) => {
    try {
      setIsLoading(true);

      const res = await fetchUnsplashImgs(query, page);

      setImages((prev: any[]) => {
        const resultImages = isSearch ? res.data.results : [...prev, ...res.data.results];
        return resultImages;
      });

    } catch (err: any) {
      setError(err);
    } finally {
      setTimeout(() => setIsLoading(false), 1000)
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
    isLoading,
    error,
    page,
    setPage,
    fetchData: (query: string, isSearch: boolean, page: number) => fetchData(query, isSearch, page)
  }
}

export default useFetchImgs;