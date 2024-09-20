import { configureStore } from "@reduxjs/toolkit";
import counterSlice, { counterAction } from "./counterSlice";
import authSlice from "./authSlice";
import userSlice from "./userSlice";
export const store = configureStore({
    reducer: { counter : counterSlice.reducer, auth: authSlice.reducer, user: userSlice.reducer}
})