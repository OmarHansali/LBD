// Importing necessary libraries
import { createSlice } from "@reduxjs/toolkit";

// Importing constants
import {
    LAYOUT_MODE,
    LAYOUT_DIRECTION,
    LAYOUT_TYPE,
    LAYOUT_TYPE_NAME
} from "../../../constants/layoutType";

// Initial state of the LayoutSlice
const defaultState = {
    currentLayoutMode: LAYOUT_MODE.LIGHT,
    currentLayoutDirection: LAYOUT_DIRECTION.LTR,
    currentLayoutType: LAYOUT_TYPE.LG,
    currentLayoutTypeName: LAYOUT_TYPE_NAME.VERTICAL
};

// Create the LayoutSlice
const layoutSlice = createSlice({
    name: 'layout',
    initialState: defaultState,
    reducers: {

        // Action to change the layout type
        changeLayoutModeReducer(state, action) {
            state.currentLayoutMode = action.payload;  // layout mode change
        },

        changeLayoutDirectionReducer(state, action) {
            state.currentLayoutDirection = action.payload;  // layout direction change
        },

        changeLayoutTypeReducer(state, action) {
            state.currentLayoutType = action.payload;  // layout type change
        },

        changeLayoutTypeNameReducer(state, action) {
            state.currentLayoutTypeName = action.payload;  // layout type name change
        }
    }
});

// Destructure actions from layoutSlice
const { changeLayoutModeReducer, changeLayoutDirectionReducer, changeLayoutTypeReducer, changeLayoutTypeNameReducer } = layoutSlice.actions;

// Exporting individual actions
export {
    changeLayoutModeReducer,
    changeLayoutDirectionReducer,
    changeLayoutTypeReducer,
    changeLayoutTypeNameReducer
};

// Exporting the reducer
export default layoutSlice.reducer;
