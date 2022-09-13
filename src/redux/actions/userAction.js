import { userSliceAction } from "../reducers/userReducer";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { encrypt, decrypt } from "../../utils/CryptoJS";
import userAPI from "../../apis/userAPI";

const kakaoLogin = (code) => {
  return async (dispatch) => {
    await userAPI
      .get(`/user/kakao/callback?code=${code}`)
      .then((res) => {
        console.log(res); // 토큰이 넘어올 것임

        const ACCESS_TOKEN = res.headers.accesstoken;

        sessionStorage.setItem("accesstoken", ACCESS_TOKEN); //예시로 로컬에 저장함
        console.log("ACCESS_TOKEN: ", ACCESS_TOKEN);
        dispatch(userSliceAction.setLogin());
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

const testJoin = () => {
  return async (dispatch) => {
    try {
      const res = await userAPI.post("/api/join", {
        username: "123@naver.com",
        password: "1231231",
        passwordCheck: "1231231",
      });
    } catch (e) {
      console.log(e);
    }
  };
};

const refreshToken = () => {
  return async (dispatch) => {
    try {
      const res = await userAPI.GET("/api/refresh");
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
      const res = await userAPI.post("/api/checkAuthNum", authNum);
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

const signUp = createAsyncThunk(
  "user/signUp",
  async (signUpData, { rejectWithValue }) => {
    try {
      const res = await userAPI.post("/api/checkpassword", signUpData);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

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
            profile: responseProfile.value.data.profileimgurl,
            star: responseProfile.value.data.star,
          })
        );
      if (responseInfo.status == "fulfilled")
        dispatch(
          userSliceAction.setMypageInfo({
            birthYear: responseInfo.value.data.birth.birthYear,
            birthMonth: responseInfo.value.data.birth.birthMonth,
            birthDay: responseInfo.value.data.birth.birthDay,
            gender: responseInfo.value.data.gender,
          })
        );
      if (responseAction.status == "fulfilled")
        dispatch(
          userSliceAction.setMypageAction({
            nickname: responseAction.value.data.nickname,
            concern: responseAction.value.data.concern,
            joinNum: responseAction.value.data.joinCnt,
          })
        );
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
        concerns: editInterest
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
        birthYear,
        birthMonth,
        birthDay,
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

      let sessionStorageLogin = sessionStorage;
      sessionStorageLogin.setItem("accesstoken", res.headers?.accesstoken);
      sessionStorageLogin.setItem("username", LoginData.username);
      sessionStorageLogin.setItem("nickname", res.headers?.nickname);
      sessionStorageLogin.setItem("profile", res.headers?.profile);
      sessionStorageLogin.setItem("social", false);

      return res;
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
  async ({ username, authNum }, { rejectWithValue }) => {
    try {
      const res = await userAPI.post("/api/checkAuthNum", {
        username, authNum,
      });
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

const userWithdraw = createAsyncThunk(
  "signUp/userWithdraw",
  async ({ password }, { rejectWithValue }) => {
    try {
      const res = await userAPI.post("/api/withdraw", {
        password,
      });
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

const changePassword = createAsyncThunk(
  "user/changePassword",
  async ({ passwordCheck,newPassword, newPasswordCheck }, { rejectWithValue }) => {
    try {
      const res = await userAPI.post("/api/changepass", {
        passwordCheck, newPassword, newPasswordCheck
      });
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

const editProfile = createAsyncThunk(
  "user/editProfile",
  async (data, { rejectWithValue }) => {
    try {
      const res = await userAPI.put("/api/mypage/profile", data, {
        headers: { "Content-Type": "multipart/form-data" },
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
  userWithdraw,
  signUpCheckAuth,
  editProfile,
  changePassword,
};
