import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authSlice";
import categorySlice from "./category"

const store = configureStore({
    reducer: {
        authSlice,
        categorySlice
    },
});

export default store;