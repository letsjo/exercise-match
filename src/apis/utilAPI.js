import axios from "axios";

const utilAPI = axios.create({
  headers: { "Content-Type": "application/json" },
});

// Add a request interceptor
utilAPI.interceptors.request.use(function (config) {
    console.log("request",config)
    return config;
  }, function (error) {
    console.log("request error",error)
    return Promise.reject(error);
  });

// Add a response interceptor
utilAPI.interceptors.response.use(function (response) {
    console.log("response success",response);
    return response;
  }, function (error) {
    console.log("response error",error)
    return Promise.reject(error);
  });

  export default utilAPI;