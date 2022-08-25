import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    boardtype:"match",
    category:"all",
};

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers:{
        setCategory(state,action){
            state.category = action.payload;
        }
    }
});

export const boardSliceAction = boardSlice.actions;
export default boardSlice.reducer;