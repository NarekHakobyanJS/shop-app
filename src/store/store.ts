import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";

const store = configureStore({
    reducer : {
        productsPage : productsSlice
    }
})

export default store