import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  ModalOpen: false,
  ModalRequiredName: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalClose(state) {
      state.ModalOpen = false;
      state.ModalRequiredName = "";
    },
    modalLocalSelectOpen(state) {
      state.ModalOpen = true;
      state.ModalRequiredName = "selectLocation";
    },
    modalInterestEditOpen(state) {
      state.ModalOpen = true;
      state.ModalRequiredName = "interestEdit";
    },
  },
});

export const modalSliceAction = modalSlice.actions;
export default modalSlice.reducer;
