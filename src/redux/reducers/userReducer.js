import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  isLogin: false,
  username: "hyunoh.jo@gmail.com",
  userNickName: "조현오",
  userProfile: "",
  userStar:1,
  userGender: "male",
  userBirthYear: "1991",
  userBirthMonth: "1",
  userBirthDay: "4",
  userJoinList: {
    gym: 1,
    running: 0,
    badminton: 0,
    badminton: 2,
    ridding: 3,
    golf: 0,
    ect: 0,
  },
  userInterest: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin(state, action) {
      state.isLogin= true;
      state.username = action.payload?.username;
      state.userProfile = action.payload?.profile;
      state.userNickName = action.payload?.nickname;
    },
    setLoginOut(state) {
      state.isLogin= false;
      state.username = "";
      state.userProfile = "";
      state.userNickName = "";
    },
    setMypageProfile(state,action) {
      state.userProfile = action.payload?.profile;
      state.userStar = action.payload?.star;
    },
    setMypageInfo(state,action) {
      state.userBirthYear = action.payload?.birthYear;
      state.userBirthMonth = action.payload?.birthMonth;
      state.userBirthDay = action.payload?.birthDay;
      state.userGender  = action.payload?.gender;
    },
    setMypageAction(state,action) {
      state.userNickName = action.payload.nickname;
      state.userInterest = action.payload?.concern;
      state.userJoinList = action.payload?.joinNum;
    },
    setUserNickName(state, action) {
      state.userNickName = action.payload;
    },
    setUserProfile(state, action) {
      state.userProfile = action.payload;
    },
    setUserGender(state, action) {
      state.userGender = action.payload;
    },
    setUserBirthYear(state, action) {
      state.userBirthYear = action.payload;
    },
    setUserBirthMonth(state, action) {
      state.userBirthMonth = action.payload;
    },
    setUserBirthDay(state, action) {
      state.userBirthDay = action.payload;
    },
    setUserJoinList(state, action) {
      state.userJoinList = action.payload;
    },
    setUserInterest(state, action) {
      state.userInterest = action.payload;
    },
  },
});

export const userSliceAction = userSlice.actions;
export default userSlice.reducer;
