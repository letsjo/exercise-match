import axios from "axios";

const userAPI = axios.create({
  baseURL: "http://15.164.192.104:8080",
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
userAPI.interceptors.response.use(async function (response) {
    console.log("response success",response);
    return response;
  }, async function (error) {

    const { response: errorResponse } = error;
    
    if (errorResponse.status === 401) {
      await axios.get(`/api/refresh`,{},{
        headers: { "Content-Type": "application/json", "accesstoken" : sessionStorage.getItem("accesstoken") },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    }

    console.log("response error",error);
    return Promise.reject(error);
  });
  
  export default userAPI;