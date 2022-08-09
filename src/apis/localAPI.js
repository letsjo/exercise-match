import axios from "axios";

const localAPI = axios.create({
  baseURL: "http://api.vworld.kr/req/data?service=data&request=GetFeature&data=LT_C_ADSIDO_INFO&key=72701A15-866F-3D4E-9346-5D88D7014A98&domain=http://localhost:3000&version=2.0&format=json&size=1000&page=1&geometry=false&attribute=true&crs=EPSG:3857&geomfilter=BOX(13663271.680031825,3894007.9689600193,14817776.555251127,4688953.0631258525)",
  headers: { "Content-Type": "multipart/form-data"},
});

// Add a request interceptor
localAPI.interceptors.request.use(
  function (config) {
    console.log("request", config);
    return config;
  },
  function (error) {
    console.log("request error", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
localAPI.interceptors.response.use(
  function (response) {
    console.log("response success", response);
    return response;
  },
  function (error) {
    console.log("response error", error);
    return Promise.reject(error);
  }
);

export default localAPI;