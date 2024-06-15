// Importing necessary libraries
import { createSlice } from "@reduxjs/toolkit";


// Create the LayoutSlice
const layoutSlice = createSlice({
    name: 'sidebar',
    initialState: false,
    reducers: {
        toggleSidebar(state) {
            return !state;
        },
    }
});

// Destructure actions from layoutSlice
const { toggleSidebar } = layoutSlice.actions;

// Exporting individual actions
export {
    toggleSidebar,
};

// Exporting the reducer
export default layoutSlice.reducer;
