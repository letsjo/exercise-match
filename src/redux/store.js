import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import modalReducer from "./reducers/modalReducer";
import locationReducer from "./reducers/locationReducer";
import signupReducer from "./reducers/signupReducer";
import boardReducer from "./reducers/boardReducer";

const store = configureStore({
  reducer: {
    userReducer,
    modalReducer,
    locationReducer,
    signupReducer,
    boardReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
