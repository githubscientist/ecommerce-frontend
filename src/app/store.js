import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";

// create a store
const store = configureStore({
    reducer: {
        auth: authSlice,
    }
});

export default store;