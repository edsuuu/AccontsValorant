import axios, { AxiosInstance } from 'axios';

const API_URL: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3555/api',
})

export default API_URL;

// import axios from 'axios';

// export default axios.create({
//      baseURL: process.env.REACT_APP_BASE_URL,
// })
