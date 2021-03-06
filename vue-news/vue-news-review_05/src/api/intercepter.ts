import { AxiosInstance } from 'axios';
import store from '../store';

function setRequestOptions(instance: AxiosInstance) {
  instance.interceptors.request.use(
    (config: any) => {
      const token = store.getters['auth/token'];
      config.headers.Authorization = token;
      return config;
    },
    (error: any) => {
      const token = error.response.headers.authorization;
      store.commit('SET_TOKEN', token);
      return Promise.reject(error.response);
    }
  );
}

function setResponseOptions(instance: AxiosInstance) {
  instance.interceptors.response.use(
    (config: any) => {
      const token = config.headers.authorization;
      store.commit('SET_TOKEN', token);
      return config;
    },
    (error: any) => {
      const token = error.response.headers.authorization;
      store.commit('SET_TOKEN', token);
      return Promise.reject(error.response);
    }
  );
}

export { setRequestOptions, setResponseOptions };
