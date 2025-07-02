import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "authSlice",
    initialState: { isLogin: false },
    reducers: {
        login: (state, actions) => {
            state.isLogin = true;
        },
        logout: (state, actions) => {
            state.isLogin = false;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
