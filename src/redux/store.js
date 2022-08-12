import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import modalReducer from "./reducers/modalReducer";

const store = configureStore({reducer:{
    userReducer,
    modalReducer,
}})

export default store;