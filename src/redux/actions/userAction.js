import { userSliceAction } from "../reducers/userReducer";
import { encrypt, decrypt } from "../../utils/CryptoJS";
import userAPI from "../../apis/userAPI";


const kakaoLogin = (code) => {
  return async (dispatch) => {
    await userAPI.get(`/api/kakaoLogin?code=${code}`)
      .then((res) => {
        console.log(res); // 토큰이 넘어올 것임

        const ACCESS_TOKEN = res.data.accessToken;

        localStorage.setItem("token", ACCESS_TOKEN); //예시로 로컬에 저장함
        console.log("ACCESS_TOKEN: ",ACCESS_TOKEN)
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
      });
  };
};

const naverLogin = (code) => {
  return async (dispatch) => {
    await userAPI.get(`/api/naverLogin?code=${code}`)
      .then((res) => {
        console.log(res); // 토큰이 넘어올 것임

        const ACCESS_TOKEN = res.data.accessToken;

        localStorage.setItem("token", ACCESS_TOKEN); //예시로 로컬에 저장함
        console.log("ACCESS_TOKEN: ",ACCESS_TOKEN)
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
      });
  };
};

const Login =(LoginData)=>{
  return async(dispatch)=>{
    try{
      const res = await userAPI.post("/user/login",LoginData)
      dispatch(userSliceAction.setLogin({username:res.data.username, nickname: res.data.nickname, profile: res.data.profile }))
    }catch(e){
      console.log(e);
    }
  }
}

// const MypageProfile=()=>{
//   return async(dispatch)=>{
//     try{
//       const mypageActionAPI = userAPI.get(
//         "api/mypage/action"
//       );
//       const mypageInfoAPI=userAPI.get(
//         "api/mypage/info"
//       );

//       let [?]=await Promise.all([
//         mypageActionAPI,
//         mypageInfoAPI,
//       ]);

//       dispatch({
//         //?
//       })

//     }catch(e){
//       console.log(e);
//     }
//   }
// }


export const userAction = {
  kakaoLogin,
  naverLogin,
  Login
};