import { userSliceAction } from "../reducers/userReducer";
import userAPI from "../../apis/userAPI";

const kakaoLogin = (code) => {
  return async (dispatch) => {
    await userAPI.get(`/kakaoLogin?code=${code}`)
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

export const userAction = {
  kakaoLogin,
};
