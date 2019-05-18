import axios from "axios";
import {TOKEN_KEY} from "../stores/SessionStore";

const api = axios.create({
  baseURL: "http://127.0.0.1:2222"
});

api.interceptors.request.use(async config => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
