import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem("token")
}

const authSlice = createSlice({
    initialState: initialState,
    name: 'auth',
    reducers: {
        login(state, action) {
            state.token = action.payload;
            state.isAuthenticated = true
            localStorage.setItem("token", action.payload)
        },
        logout(state){
            state.token = null
            state.isAuthenticated = false
            localStorage.removeItem("token")
        },
        setAuth(state, action){
            state.token = action.payload.token
            state.isAuthenticated = action.payload.isAuthenticated
        }
    }
})

export const { login, logout, setAuth } = authSlice.actions
export default authSlice