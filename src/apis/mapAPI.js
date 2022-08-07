import axios from "axios";

const mapAPI = axios.create({
  headers: { "Content-Type": "application/json", "Authorization": `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API}`},
});

// Add a request interceptor
mapAPI.interceptors.request.use(function (config) {
    console.log("request",config)
    return config;
  }, function (error) {
    console.log("request error",error)
    return Promise.reject(error);
  });

// Add a response interceptor
mapAPI.interceptors.response.use(function (response) {
    console.log("response success",response);
    return response;
  }, function (error) {
    console.log("response error",error)
    return Promise.reject(error);
  });

  export default mapAPI;