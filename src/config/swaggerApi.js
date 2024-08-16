import axios from "axios";

export const swaggerApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const setToken = (token) => {
  swaggerApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  swaggerApi.defaults.headers.common.Authorization = "";
};
