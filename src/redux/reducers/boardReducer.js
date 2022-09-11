import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    boardType:"matching",
    category:"all",
    boardData:[],
    comments:[],
    detailData:{},
};

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers:{
        setBoardType(state,action){
            state.boardType = action.payload.type;
            state.category = action.payload.cate;
        },
        loadCommentsData(state,action){
            state.comments = action.payload;
        },
        loadDetailData(state,action){
            state.detailData=action.payload;
        },
        loadInfoDetailData(state, action){
            state.detailData=action.payload;
        }
    }
});

export const boardSliceAction = boardSlice.actions;
export default boardSlice.reducer;