import axios from "axios";

/* Temporary url */
const api = axios.create({
  baseURL: "http://localhost:5000/",
});

export default api;
