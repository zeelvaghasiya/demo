import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../features/countSlice.js";

export const store = configureStore({
    reducer : {
        count : countSlice
    }
})