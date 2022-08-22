import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    currentLat:37.566353,
    currentLon:126.977953,
    selectedCity: "",
    selectedGu: "",
};

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers:{
        currentLocation(state,action){
            state.selectedCity=action.payload.currentLat;
            state.selectedGu=action.payload.currentLon;
        },
        selectLocation(state,action){
            state.selectedCity=action.payload.selectedCity;
            state.selectedGu=action.payload.selectedGu;
        },
    }
});

export const locationSliceAction = locationSlice.actions;
export default locationSlice.reducer;