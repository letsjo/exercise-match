import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  isLogin: false,
  username: "hyunoh.jo@gmail.com",
  userNickName: "조현오",
  userProfile: "",
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
  userInterest: ["hiking", "swimming"],
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
      setLoginOut(state){
        state.isLogin = false;
        state.username = "";
        state.userProfile = "";
        state.userNickName="";
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
