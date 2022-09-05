import axios from "axios";

const userAPI = axios.create({
  baseURL: "http://13.124.51.222:8080",
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
  }, async function (error) {

    const { response: errorResponse } = error;
    
    if (errorResponse.status === 401) {
      // return await resetTokenAndReattemptRequest(error);
    }

    console.log("response error",error);
    return Promise.reject(error);
  });


  // let isAlreadyFetchingAccessToken = false;
  // let subscribers = [];
  
  // async function resetTokenAndReattemptRequest(error) {
  //   try {
  //     const { response: errorResponse } = error;
  
  //     // subscribers에 access token을 받은 이후 재요청할 함수 추가 (401로 실패했던)
  //     // retryOriginalRequest는 pending 상태로 있다가
  //     // access token을 받은 이후 onAccessTokenFetched가 호출될 때
  //     // access token을 넘겨 다시 axios로 요청하고
  //     // 결과값을 처음 요청했던 promise의 resolve로 settle시킨다.
  //     const retryOriginalRequest = new Promise((resolve, reject) => {
  //       addSubscriber(async (accessToken) => {
  //         try {
  //           errorResponse.config.headers['Authorization'] =
  //             'Bearer ' + accessToken;
  //           resolve(userAPI(errorResponse.config));
  //         } catch (err) {
  //           reject(err);
  //         }
  //       });
  //     });
  
  //     // refresh token을 이용해서 access token 요청
  //     if (!isAlreadyFetchingAccessToken) {
  //       isAlreadyFetchingAccessToken = true; // 문닫기 (한 번만 요청)
  
  //       const { data } = await postRefresh();
  //       storeUserToken('access', data.access);
  //       storeUserToken('refresh', data.refresh);
  
  //       isAlreadyFetchingAccessToken = false; // 문열기 (초기화)
  
  //       onAccessTokenFetched(data.access);
  //     }
  
  //     return retryOriginalRequest; // pending 됐다가 onAccessTokenFetched가 호출될 때 resolve
  //   } catch (error) {
  //     signOut();
  //     return Promise.reject(error);
  //   }
  // }
  
  // function addSubscriber(callback) {
  //   subscribers.push(callback);
  // }
  
  // function onAccessTokenFetched(accessToken) {
  //   subscribers.forEach((callback) => callback(accessToken));
  //   subscribers = [];
  // }
  
  // function signOut() {
  //   removeUserToken('access');
  //   removeUserToken('refresh');
  //   window.location.href = '/signin';
  // }

  export default userAPI;