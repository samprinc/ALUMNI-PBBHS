import axios from 'axios';

const api = axios.create({
  baseURL: 'https://alumni-backend-sjku.onrender.com/api/',
});

// Add a request interceptor to include token
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('access');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export default api;
