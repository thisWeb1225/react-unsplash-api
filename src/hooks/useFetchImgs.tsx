import axios from "axios";
import { useEffect, useState } from "react";

const useFetchImgs = (query: string) => {
  const [images, setImages] = useState([] as any);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');

  const fetchData = async (query: string, isSearch = true) => {
    try {
      setIsLoading(true);
      const res = await axios({
        method: 'GET',
        url: 'https://api.unsplash.com/search/photos',
        params: {
          query,
          page: isSearch ? 1 : page,
          client_id: import.meta.env.VITE_UNSPLASH_ACCESS_KEY
        }
      });

      setImages((prev: any[]) => {
        const resultImages = isSearch ? res.data.results : [...prev, ...res.data.results];
        return resultImages;
      });
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
      setPage((prev) => isSearch ? 2 : prev + 1);
    }
  }

  useEffect(() => {
    fetchData(query);
  }, [query])

  return {
    images,
    isLoading,
    error,
    fetchData: (query: string, isSearch?: boolean) => fetchData(query, isSearch)
  }
}

export default useFetchImgs;