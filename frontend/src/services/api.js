import axios from "axios";

const API = axios.create({
    baseURL: "https://your-render-backend-name.onrender.com"
});

export default API;