import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    boardType:"match",
    category:"all",
    boardData:[],
};

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers:{
        setBoardType(state,action){
            state.boardType = action.payload.type;
            state.category = action.payload.cate;
        },
        loadBoardData(state,action){
            state.boardData = action.payload;
        }
    }
});

export const boardSliceAction = boardSlice.actions;
export default boardSlice.reducer;