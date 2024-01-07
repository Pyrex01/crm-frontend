import axios from "axios";
import * as env from "../env.json";
export const netInstance = axios.create({
    baseURL: env.API_URL,
    timeout: 1000,
  });