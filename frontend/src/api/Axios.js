import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9000/api", // Backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token automatically for every request
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
