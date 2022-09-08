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
  };
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
      const myPageProfileAPI = userAPI.get("/api/mypage/profile");

      let [responseAction, responseInfo, responseProfile] =
        await Promise.allSettled([
          myPageActionAPI,
          myPageInfoAPI,
          myPageProfileAPI,
        ]);

      if (responseProfile.status == "fulfilled")
        dispatch(
          userSliceAction.setMypageProfile({
            profile: responseProfile.value.data.profile,
            star: responseProfile.value.data.star,
          })
        );
      if (responseInfo.status == "fulfilled")
        dispatch(
          userSliceAction.setMypageInfo({
            birthYear: responseInfo.value.data.birthYear,
            birthMonth: responseInfo.value.data.birthMonth,
            birthDay: responseInfo.value.data.birthDay,
            gender: responseInfo.value.data.gender,
          })
        );
      if (responseAction.status == "fulfilled")
        dispatch(
          userSliceAction.setMypageAction({
            nickname: responseAction.value.data.nickname,
            // concern: responseAction.value.data.concern,
            joinNum: responseAction.value.data.joinCnt,
          })
        );

      console.log(responseAction, responseInfo, responseProfile);
      // console.log(responseAction, responseInfo);
    } catch (e) {
      console.log(e);
    }
  };
};

const editNickname = createAsyncThunk(
  "user/editNickname",
  async (inputValue, { rejectWithValue }) => {
    try {
      const res = await userAPI.put("/api/mypage/actionedit/nickname", {
        nickname: inputValue,
      });
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

const editConcern = createAsyncThunk(
  "user/editConcern",
  async (editInterest, { rejectWithValue }) => {
    try {
      const res = await userAPI.put("/api/mypage/actionedit/concern", {
        concern1En: editInterest[0].en,
        concern1Kor: editInterest[0].ko,
        concern2En: editInterest[1].en,
        concern2Kor: editInterest[1].ko,
        concern3En: editInterest[2].en,
        concern3Kor: editInterest[2].ko,
      });
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

const editGender = createAsyncThunk(
  "user/editGender",
  async (gender, { rejectWithValue }) => {
    try {
      const res = await userAPI.put("/api/mypage/infoedit/gender", {
        gender,
      });
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

const editBirth = createAsyncThunk(
  "user/editBirth",
  async ({ birthYear, birthMonth, birthDay }, { rejectWithValue }) => {
    try {
      const res = await userAPI.put("/api/mypage/infoedit/birth", {
        birthYear, birthMonth, birthDay,
      });
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

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

const userLogOut = createAsyncThunk(
  "user/userLogOut",
  async ({}, { rejectWithValue }) => {
    try {
      const res = await userAPI.get("/api/logout");
      sessionStorage.removeItem("accesstoken");
      sessionStorage.removeItem("refreshtoken");
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("nickname");
      sessionStorage.removeItem("profile");
      console.log(res);
      return res;
      // sessionStorageLogin.setItem("nickname", response.data.userInfoDto.nickname);
      // sessionStorageLogin.setItem("profile", response.data.userInfoDto.profile);
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

const signUpCheckAuth = createAsyncThunk(
  "signUp/checkAuth",
  async ({ birthYear, birthMonth, birthDay }, { rejectWithValue }) => {
    try {
      const res = await userAPI.put("/api/mypage/infoedit/birth", {
        birth: birthYear + birthMonth + birthDay,
      });
      console.log(res);
      return res;
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
  userLogOut,
};
