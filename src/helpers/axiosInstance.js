import axios from "axios";


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

//agrgegar token a las peticiones mediante interceptors


axiosInstance.interceptors.request.use((config) => {

    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

    return config

})




export default axiosInstance;