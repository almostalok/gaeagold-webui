import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVICE_BASE_URL,
  timeout: 10000, // Timeout in milliseconds
});

const AXIOS_DEBUG = false;

axiosInstance.interceptors.request.use((request) => {
  if (process.env.NODE_ENV === 'development' && AXIOS_DEBUG) {
    console.log('Starting Request URL >>>>', request?.url);
  }
  return request;
});

axiosInstance.interceptors.response.use((response) => {
  if (process.env.NODE_ENV === 'development' && AXIOS_DEBUG) {
    console.log('Response >>>>', JSON.stringify(response.data, null, 2));
  }
  return response;
});

export default axiosInstance;
