import axios from "axios";

export const setLoadingInterceptor = ({ startLoading, stopLoading }) => {
  axios.interceptors.request.use(
    (config) => {
      startLoading();
      return config;
    },
    (error) => {
      stopLoading();
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (res) => {
      stopLoading();
      return res;
    },
    (error) => {
      stopLoading();
      return Promise.reject(error);
    }
  );
};

export default setLoadingInterceptor;
