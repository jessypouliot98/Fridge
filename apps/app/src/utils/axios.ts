import axios from 'axios';
import axiosRetry from "axios-retry";

const apiInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

axiosRetry(apiInstance, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
  retryCondition: (error) => {
    return [404].includes(error.response?.status as number);
  },
});

export default apiInstance;
