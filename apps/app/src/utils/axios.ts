import axios from 'axios';
import axiosRetry from "axios-retry";

const HOME = '192.168.0.102:3000';

const apiInstance = axios.create({
  baseURL: `http://${HOME}/api`,
});

axiosRetry(apiInstance, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
  retryCondition: (error) => {
    return [404].includes(error.response?.status as number);
  },
});

export default apiInstance;
