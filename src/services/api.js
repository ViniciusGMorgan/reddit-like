import axios from "axios";

const api = axios.create({
  headers: {
    accept: "*/*",
    "Content-Type": "application/json-patch+json",
    "Access-Control-Allow-Origin": "*",
  },
  baseURL: "https://www.mocky.io/v2",
});

export default api;
