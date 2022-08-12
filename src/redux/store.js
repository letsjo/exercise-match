import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./reducers/modalReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({reducer:{
    userReducer,
    modalReducer,
}})

export default store;