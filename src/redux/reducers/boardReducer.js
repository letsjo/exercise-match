import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    boardType:"matching",
    category:"all",
    isCommentLoading:false,
    comments:[],
    detailData:{},
};

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers:{
        requestCommentsList(state){
            state.isCommentLoading = true;
        },
        requestDoneCommentsList(state){
            state.isCommentLoading = false;
        },
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
        },
    }
});

export const boardSliceAction = boardSlice.actions;
export default boardSlice.reducer;