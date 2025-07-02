import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "authSlice",
    initialState: { isLogin: false },
    reducers: {
        login: () => {},
        logout: () => {},
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
