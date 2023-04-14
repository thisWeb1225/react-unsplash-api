import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (param: string) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  axios.defaults.baseURL = 'https://api.unsplash.com';

  const fetchData = async (url: string) => {
    try {
      setIsLoading(true);
      const res = await axios(url);
      setResponse(res.data.results);
    } catch (err: any) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData(param);
  }, [param])

  return {
    response,
    isLoading,
    error,
    fetchData: (url: string) => fetchData(url)
  }
}

export default useAxios;