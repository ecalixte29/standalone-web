import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

// Use the VITE_API_URL from environment variables in production,
// otherwise, use the relative path for the Vite proxy in development.
const baseURL = import.meta.env.PROD 
  ? `https://${import.meta.env.VITE_API_URL}` 
  : '/api';

const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api; 