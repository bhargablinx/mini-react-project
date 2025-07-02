import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "authSlice",
    initialState: { isLogin: false },
    reducers: {
        login: (state, actions) => {
            state.isLogin = !state.isLogin;
        },
        logout: () => {},
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
