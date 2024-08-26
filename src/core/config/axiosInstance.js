import axios from "axios";
import { StringManager } from "../constants/StringManager";

const axiosInstance = axios.create({
  baseURL: StringManager.baseUrl,
  headers: {
    accept: "application/json",
    Authorization: "Bearer a1f18955374c022f6404ba14b7acd019",

    // params: {
    //   api_key: StringManager.apiKey,
    // }
  },
});

export default axiosInstance;
