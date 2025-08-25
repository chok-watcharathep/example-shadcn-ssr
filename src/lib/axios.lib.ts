import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_APP_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  adapter: 'fetch',
  fetchOptions: {
    cache: 'no-store',
    next: {
      revalidate: 60,
    },
  }
});

export default axiosInstance;