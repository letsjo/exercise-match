import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    ModalOpen: false,
    ModalRequiredName: "",
    productId:"",
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers:{
        modalClose(state){
            state.ModalOpen = false;
            state.ModalRequiredName ="";
        },
        modalLoginOpen(state){
            state.ModalOpen = true;
            state.ModalRequiredName ="login";
        },
        modalSignupOpen(state){
            state.ModalOpen = true;
            state.ModalRequiredName ="signup";
        },
        modalCommentOpen(state,action){
            state.ModalOpen = true;
            state.ModalRequiredName ="comment";
            state.productId = action.payload;
        },
        modalCartAlertOpen(state){
            state.ModalOpen = true;
            state.ModalRequiredName ="alertcart";
        },
    }
});

export const modalSliceAction = modalSlice.actions;
export default modalSlice.reducer;