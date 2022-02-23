import axios from 'axios';
import { requestHandler, successHandler, errorHandler } from '../interceptors';
import { BASE_URL } from '../../utils/Constants';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((request) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    request.headers.Authorization = `Bearer ${user.accessToken}`;
  }
  return requestHandler(request);
});
axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);
