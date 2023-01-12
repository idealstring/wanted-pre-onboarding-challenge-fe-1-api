import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { ACCESS_TOKEN_KEY } from "./constants";

const baseURL: string = process.env.NEXT_PUBLIC_API_KEY as string;
const client = axios.create({ baseURL });

type IError = {
  details: string;
};

client.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (token) {
      config.headers = {};
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

client.interceptors.response.use(
  (res: AxiosResponse) => res,
  (error: AxiosError<IError>) => {
    console.log(error);
    const isTokenMissing = error.response?.data.details === "Token is missing";

    if (isTokenMissing) {
      alert("로그인이 필요합니다.");
      window.location.href = "/auth/login";
    } else {
      alert(error.response?.data.details);
    }

    return Promise.reject(error);
  }
);

export default client;
