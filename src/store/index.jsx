import { configureStore } from "@reduxjs/toolkit";
import counterSlice, { counterAction } from "./counterSlice";
import authSlice from "./authSlice";
export const store = configureStore({
    reducer: { counter : counterSlice.reducer, auth: authSlice.reducer}
})