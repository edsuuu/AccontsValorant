import axios, { AxiosInstance } from 'axios';

const API_URL: AxiosInstance = axios.create({
    baseURL: 'http://35.238.249.183/api',
    // baseURL: 'http://localhost:3553/api',
});

export default API_URL;
