import axios from 'axios'

const request = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 1000000
})
// axios 请求拦截器
request.interceptor.request.use(
    (config)=>{
        return config;
    },
    (e)=>{
        return Promise.reject(e);
    }
);
// axios 响应拦截器
request.interceptor.response.use(
    (res)=>{
        return res.data;
    },
    (e)=>{
        return Promise.reject(e);
    }
);
export default request;