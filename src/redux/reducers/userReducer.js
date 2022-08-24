import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  userName: "hyunoh.jo@gmail.com",
  userNickName: "조현오",
  userGender: "남성",
  userBirthYear: "1991",
  userBirthMonth: "1",
  userBirthDay: "4",
  userJoinList: {"헬스":1,"런닝&조깅":0,"배드민턴":0,"테니스":2,"라이딩":3,"골프":0,"기타":0},
  userInterest: ["등산"],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInterest(state, action) {
      state.userInterest = action.payload;
    },
    setUserNickName(state, action) {
      state.userNickName = action.payload;
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
  },
});

export const userSliceAction = userSlice.actions;
export default userSlice.reducer;
