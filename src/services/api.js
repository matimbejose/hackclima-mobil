import axios from "axios";


const api = axios.create({
    baseURL: 'http://api.com/api'
})



export default api;