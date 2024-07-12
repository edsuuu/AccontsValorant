import axios, { AxiosInstance } from 'axios';

const API_URL: AxiosInstance = axios.create({
    baseURL: 'https://deploy-fronts.ddns.net/api',
});

export default API_URL;
