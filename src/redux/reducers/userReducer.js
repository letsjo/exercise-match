import { createSlice } from "@reduxjs/toolkit";

let initialState = {
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const userSliceAction = userSlice.actions;
export default userSlice.reducer;
