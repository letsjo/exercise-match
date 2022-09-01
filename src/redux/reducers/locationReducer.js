import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    currentLat:37.566353,
    currentLon:126.977953,
    selectedCity: "all",
    selectedGu: "all",
    localsNameList: []
};

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers:{
        currentLocation(state,action){
            state.currentLat=action.payload.currentLat;
            state.currentLon=action.payload.currentLon;
        },
        selectLocation(state,action){
            state.selectedCity=action.payload.selectedCity;
            state.selectedGu=action.payload.selectedGu;
        },
        getLocalsName(state,action){
            state.localsNameList=action.payload;
        },
    }
});

export const locationSliceAction = locationSlice.actions;
export default locationSlice.reducer;