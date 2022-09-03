import { userSliceAction } from "../reducers/userReducer";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { encrypt, decrypt } from "../../utils/CryptoJS";
import userAPI from "../../apis/userAPI";

const kakaoLogin = (code) => {
  return async (dispatch) => {
    await userAPI
      .get(`/api/kakaoLogin?code=${code}`)
      .then((res) => {
        console.log(res); // 토큰이 넘어올 것임

        const ACCESS_TOKEN = res.data.accessToken;

        localStorage.setItem("token", ACCESS_TOKEN); //예시로 로컬에 저장함
        console.log("ACCESS_TOKEN: ", ACCESS_TOKEN);
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
      });
  };
};

const naverLogin = (code) => {
  return async (dispatch) => {
    await userAPI
      .get(`/api/naverLogin?code=${code}`)
      .then((res) => {
        console.log(res); // 토큰이 넘어올 것임

        const ACCESS_TOKEN = res.data.accessToken;

        localStorage.setItem("token", ACCESS_TOKEN); //예시로 로컬에 저장함
        console.log("ACCESS_TOKEN: ", ACCESS_TOKEN);
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
      });
  };
};

// const googleLogin = createAsyncThunk(
//   "user/googleLogin",
//   async ({access_Token,refresh_Token,nickname, username, profile}, { rejectWithValue }) => {
//     try {
//       userAPI.defaults.headers.common["accesstoken"] = access_Token;
//       userAPI.defaults.headers.common["refreshtoken"] = refresh_Token;
      

//       let sessionStorageLogin = sessionStorage;
//       sessionStorageLogin.setItem("accesstoken", access_Token);
//       sessionStorageLogin.setItem("refreshtoken", refresh_Token);
//       sessionStorageLogin.setItem("nickname", nickname); //닉네임
//       sessionStorageLogin.setItem("username", username); //아이디
//       sessionStorageLogin.setItem("profile", profile); //프로필 사진
      
//       return ;
//     } catch (err) {
//       console.log(err);
//       return rejectWithValue(err.response.data.error);
//     }
//   }
// );

const testJoin = () => {
  return async (dispatch) => {
    try {
      const res = await userAPI.post("/api/join", {
        username: "123@naver.com",
        password: "1231231",
        passwordCheck: "1231231",
      });
      // dispatch(userSliceAction.setLogin({username:res.data.username, nickname: res.data.nickname, profile: res.data.profile }))
    } catch (e) {
      console.log(e);
    }
  };
};

const refreshToken = () => {
  return async (dispatch) => {
    try {
      const res = await userAPI.GET("/api/refresh");
      // dispatch(userSliceAction.setLogin({username:res.data.username, nickname: res.data.nickname, profile: res.data.profile }))
    } catch (e) {
      console.log(e);
    }
  };
};

const checkEmail = createAsyncThunk(
  "user/checkEmail",
  async (username, { rejectWithValue }) => {
    try {
      const res = await userAPI.post("/api/checkemail", username);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

const mailCheck = (username) => {
  return async (dispatch) => {
    try {
      const res = await userAPI.post("/api/mailcheck", username);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
};

const checkAuthkey = (authNum) => {
  return async (dispatch) => {
    try {
      const res = await userAPI.post("/api/checkauthnum", authNum);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
};

const checkPassword = (password, passwordCheck) => {
  return async (dispatch) => {
    try {
      const res = await userAPI.post("/api/checkpassword", {
        password: encrypt(password),
        passwordCheck: encrypt(passwordCheck),
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
};

const signUp = (username, password, passwordCheck) => {
  return async (dispatch) => {
    try {
      const res = await userAPI.post("/api/signup", {
        username,
        password: encrypt(password),
        passwordCheck: encrypt(passwordCheck),
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
};

const loadMyPage = () => {
  return async (dispatch) => {
    try {
      const myPageActionAPI = userAPI.get("/api/mypage/action");
      const myPageInfoAPI = userAPI.get("/api/mypage/info");
      // const myPageProfileAPI = userAPI.get("/api/mypage/profile");

      let [responseAction, responseInfo, responseProfile] = await Promise.all([
        myPageActionAPI,
        myPageInfoAPI,
        // myPageProfileAPI,
      ]);

      // console.log(responseAction, responseInfo, responseProfile);
      console.log(responseAction, responseInfo);
    } catch (e) {
      console.log(e);
    }
  };
};

const editNickname = (inputValue) => {
  return async (dispatch) => {
    try {
      const res = await userAPI.put("/api/mypage/actionedit/nickname", {
        nickname: inputValue,
      });
      dispatch(userSliceAction.setUserNickName(inputValue));
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
};

const editConcern = (editInterest) => {
  return async (dispatch) => {
    try {
      const res = await userAPI.put("/api/mypage/actionedit/concern", {
        concern1:editInterest[0],concern2:editInterest[1],concern3:editInterest[2]
      });
      dispatch(userSliceAction.setUserInterest(editInterest));
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
};

const editGender = (gender) => {
  return async (dispatch) => {
    try {
      const res = await userAPI.put("/api/mypage/infoedit/gender", {
        gender,
      });
      dispatch(userSliceAction.setUserGender(gender));
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
};

const editBirth = (birthYear, birthMonth, birthDay) => {
  return async (dispatch) => {
    try {
      const res = await userAPI.put("/api/mypage/infoedit/birth", {
        birth: birthYear+birthMonth+birthDay,
      });
      dispatch(userSliceAction.setUserBirthYear(birthYear));
      dispatch(userSliceAction.setUserBirthMonth(birthMonth));
      dispatch(userSliceAction.setUserBirthDay(birthDay));
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
};

const userLogin = createAsyncThunk(
  "user/userLogin",
  async (LoginData, { rejectWithValue }) => {
    try {
      const res = await userAPI.post("/login", LoginData);
      userAPI.defaults.headers.common["accesstoken"] = res.headers?.accesstoken;
      userAPI.defaults.headers.common["refreshtoken"] =
        res.headers?.refreshtoken;

      let sessionStorageLogin = sessionStorage;
      sessionStorageLogin.setItem("accesstoken", res.headers?.accesstoken);
      sessionStorageLogin.setItem("refreshtoken", res.headers?.refreshtoken);
      sessionStorageLogin.setItem("username", LoginData.username);

      return res;
      // sessionStorageLogin.setItem("nickname", response.data.userInfoDto.nickname);
      // sessionStorageLogin.setItem("profile", response.data.userInfoDto.profile);
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

export const userAction = {
  kakaoLogin,
  naverLogin,
  userLogin,
  refreshToken,
  checkEmail,
  mailCheck,
  checkAuthkey,
  checkPassword,
  signUp,
  testJoin,
  loadMyPage,
  editNickname,
  editConcern,
  editGender,
  editBirth,
};
