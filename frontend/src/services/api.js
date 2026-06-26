import axios from "axios";

const API = axios.create({
  baseURL: "https://complaint-management-system.onrender.com",
});

export default API;