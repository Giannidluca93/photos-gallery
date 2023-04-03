import axios from "axios";

export const axiosInstance = axios.create({
  // Configuration
  baseURL: "http://localhost:3004",
  timeout: 8000,
});
