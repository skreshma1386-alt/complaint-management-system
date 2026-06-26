import axios from "axios";

const API = axios.create({
    baseURL: "https://complaint-management-system-5qw0.onrender.com"
});

export default API;