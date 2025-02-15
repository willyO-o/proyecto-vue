import axios from "axios";


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

//agrgegar token a las peticiones mediante interceptors



export default axiosInstance;