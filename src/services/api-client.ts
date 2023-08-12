import axios, {AxiosRequestConfig} from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fce3a3fc93e64da6b646abc13712d312",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (requestConfig?: AxiosRequestConfig) => axiosInstance.get<FetchResponse<T>>(this.endpoint, requestConfig).then((res) => res.data);
  // TODO: Here you gonna add number to id
  get = (id: string) => axiosInstance.get<T>(this.endpoint + "/" + id).then((res) => res.data);
}

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

export default APIClient;
