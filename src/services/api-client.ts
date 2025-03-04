import axios, { AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
  count: number;
  next?: string | null;
  results: T[];
}
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "0f2eb5240c2648bf9befd5f1b33ce9a7",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: string | number, config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}`, config)
      .then((res) => res.data);
  };
}
export default APIClient;
