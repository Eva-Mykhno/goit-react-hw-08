import axios from "axios";

export const swaggerApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
});
