import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import modalReducer from "./reducers/modalReducer";
import locationReducer from "./reducers/locationReducer";
import signupReducer from "./reducers/signupReducer";

const store = configureStore({reducer:{
    userReducer,
    modalReducer,
    locationReducer,
    signupReducer,
}})

export default store;