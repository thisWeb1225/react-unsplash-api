import axios from "axios"

const fetchUnsplashImgs = async (query: string, page: number = 1) => {
  const result = await axios({
    method: 'GET',
    url: 'https://api.unsplash.com/search/photos',
    params: {
      query,
      page,
      client_id: import.meta.env.VITE_UNSPLASH_ACCESS_KEY
    }
  });

  return result;
}

export default fetchUnsplashImgs;