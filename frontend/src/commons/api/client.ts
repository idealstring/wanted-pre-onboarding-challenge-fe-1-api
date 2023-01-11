import { useRouter } from "next/router";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const baseURL: string = process.env.REACT_APP_BASE_URL as string;
const client = axios.create({ baseURL });

type IError = {
  details: string;
};

client.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("token");

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
    const router = useRouter();
    const isTokenMissing = error.response?.data.details === "Token is missing";

    if (isTokenMissing) {
      alert("로그인이 필요합니다.");
      router.push("/auth/login");
    } else {
      alert(error.response?.data.details);
    }

    return Promise.reject(error);
  }
);

export default client;
