import axios from "axios";

export const client = axios.create({
  baseURL: "https://swapi.dev/api",
  timeout: 5000,
  params: { format: "json" },
});
