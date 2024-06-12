// Importing necessary libraries
import { createSlice } from "@reduxjs/toolkit";

// Importing constants
import {
    THEME_MODE,
} from "../../../constants/layoutType";

// Initial state of the LayoutSlice
const defaultState = {
    currentLayoutMode: THEME_MODE.LIGHT,
};

// Create the LayoutSlice
const layoutSlice = createSlice({
    name: 'layout',
    initialState: defaultState,
    reducers: {

        
        toggleLayoutModeReducer(state) {
            state.currentLayoutMode = state.currentLayoutMode === THEME_MODE.LIGHT ? THEME_MODE.DARK : THEME_MODE.LIGHT;
        },

    }
});

// Destructure actions from layoutSlice
const { toggleLayoutModeReducer} = layoutSlice.actions;

// Exporting individual actions
export {
    toggleLayoutModeReducer,
};

// Exporting the reducer
export default layoutSlice.reducer;
