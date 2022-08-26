import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    boardType:"match",
    category:"all",
};

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers:{
        setBoardType(state,action){
            state.boardType = action.payload.type;
            state.category = action.payload.cate;
        },
    }
});

export const boardSliceAction = boardSlice.actions;
export default boardSlice.reducer;