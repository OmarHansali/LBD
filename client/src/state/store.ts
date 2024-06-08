import { configureStore } from "@reduxjs/toolkit";
import LayoutReducer from "./features/slices/reducer";

export const store = configureStore({
    reducer: {
        layout: LayoutReducer
    },
    devTools: true
})