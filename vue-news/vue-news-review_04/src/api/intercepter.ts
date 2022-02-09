import { AxiosInstance } from "axios";
import store from "../store/index";

function setRequestOptions(instance: AxiosInstance): any {
  instance.interceptors.request.use(
    (config: any) => {
      const token = store.getters["auth/token"];
      config.headers.Authorization = token;
      return config;
    },
    (error) => {
      const token = error.response.headers.authorization;
      store.commit("SET_TOKEN", token);
      return Promise.reject(error.response);
    }
  );
}

function setResponseOptions(instance: AxiosInstance): any {
  instance.interceptors.response.use(
    (config) => {
      const token = config.headers.authorization;
      store.commit("SET_TOKEN", token);
      return config;
    },
    (error) => {
      const token = error.response.headers.authorization;
      store.commit("SET_TOKEN", token);
      return Promise.reject(error.response);
    }
  );
}

export { setRequestOptions, setResponseOptions };
