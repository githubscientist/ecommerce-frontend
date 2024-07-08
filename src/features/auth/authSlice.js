import { createSlice } from "@reduxjs/toolkit";

// define an initial state
const initialState = {
    user: null,
};

// create a slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
    }
});

// export the slice actions
export const { login } = authSlice.actions;

export default authSlice.reducer;

export const selectUser = state => state.auth.user;