import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  info: {
    email: "",
    password: "",
  },
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    getInfo(state,actions){
        state.info.email = actions.payload?.inputEmail;
        state.info.password = actions.payload?.inputPassword;
    }
  },
});

export const signupSliceAction = signupSlice.actions;
export default signupSlice.reducer;
