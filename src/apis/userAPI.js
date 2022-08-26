import axios from "axios";

const userAPI = axios.create({
  baseURL: "http://13.209.65.84:8080",
  headers: { "Content-Type": "application/json" },
});

// Add a request interceptor
userAPI.interceptors.request.use(function (config) {
    console.log("request",config)
    return config;
  }, function (error) {
    console.log("request error",error)
    return Promise.reject(error);
  });

// Add a response interceptor
userAPI.interceptors.response.use(function (response) {
    console.log("response success",response);
    return response;
  }, function (error) {
    console.log("response error",error)
    return Promise.reject(error);
  });

  export default userAPI;