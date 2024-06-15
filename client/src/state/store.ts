import { configureStore } from "@reduxjs/toolkit";
import LayoutReducer from "./features/slices/reducer";
import sideBarReducer from "./features/slices/sideBar";

export const store = configureStore({
    reducer: {
        layout: LayoutReducer,
        sidebar: sideBarReducer
    },
    devTools: true
})