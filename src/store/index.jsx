import { configureStore } from "@reduxjs/toolkit";
import counterSlice, { counterAction } from "./counterSlice";
export const store = configureStore({
    reducer: { counter : counterSlice.reducer}
})