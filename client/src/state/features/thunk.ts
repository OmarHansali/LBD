/* eslint-disable @typescript-eslint/no-explicit-any */
import { LAYOUT_MODE, LAYOUT_TYPE, LAYOUT_TYPE_NAME } from "../../constants/layoutType";
import {
    changeLayoutModeReducer,
    changeLayoutDirectionReducer,
    changeLayoutTypeReducer,
    changeLayoutTypeNameReducer
} from "./slices/reducer";

/**
 * Changes the HTML attribute of the document's root element
 * @param {string} attribute - The attribute to change
 * @param {string} value - The new value for the attribute
 * @returns {boolean} - Indicates whether the operation was successful
 */
const changeDocumentAttribute = (attribute: any, value: any) => {
    if (document.documentElement) {
        document.documentElement.setAttribute(attribute, value);
        return true;
    }
    return false;
};

const changeBodyClass = (mode: LAYOUT_MODE.LIGHT | LAYOUT_MODE.DARK) => {
    if (document.body) {
        // Remove existing mode classes
        document.body.classList.remove(LAYOUT_MODE.LIGHT, LAYOUT_MODE.DARK);

        // Add the new mode class
        document.body.classList.add(mode);
        return true;
    }
    return false;
};

/**
 * Changes the layout type and updates the corresponding HTML attribute
 * @param {string} layoutMode - The new layout type
 */
export const changeLayoutMode =
    (layoutMode: any) => async (dispatch: any) => {
        try {
            // Change HTML attribute
            const attributeChanged = changeBodyClass(layoutMode);

            if (attributeChanged) {
                // Dispatch the layout type change to the reducer
                dispatch(changeLayoutModeReducer(layoutMode));
            } else {
                console.error(
                    "Failed to change HTML attribute. Document root element not found."
                );
            }
        } catch (error) {
            console.error("An error occurred while changing the layout type:", error);
        }
    };

/**
 * Changes the layout type and updates the corresponding HTML attribute
 * @param {string} layoutDirection - The new layout type
 */
export const changeLayoutDirection =
    (layoutDirection: any) => async (dispatch: any) => {
        try {
            // Change HTML attribute
            const attributeChanged = changeDocumentAttribute(
                "dir",
                layoutDirection
            );

            if (attributeChanged) {
                // Dispatch the layout type change to the reducer
                dispatch(changeLayoutDirectionReducer(layoutDirection));
            } else {
                console.error(
                    "Failed to change HTML attribute. Document root element not found."
                );
            }
        } catch (error) {
            console.error("An error occurred while changing the layout type:", error);
        }
    };


/**
* Changes the layout type and updates the corresponding HTML attribute
* @param {string} layoutType - The new layout type
*/
export const changeLayoutType = (layoutType: LAYOUT_TYPE) => async (dispatch: any) => {

    try {

        if (layoutType) {
            dispatch(changeLayoutTypeReducer(layoutType));
            return true;
        } else {
            console.error(
                "Failed to change HTML attribute. Document root element not found."
            );
        }
    } catch (error) {
        console.error("An error occurred while changing the layout type:", error);
    }
};

/**
* Changes the layout type and updates the corresponding HTML attribute
* @param {any} layoutTypeName - The new layout type
*/
export const changeLayoutTypeName = (layoutTypeName: LAYOUT_TYPE_NAME) => async (dispatch: any) => {
    try {
        if (layoutTypeName === LAYOUT_TYPE_NAME.SIMPLEDETACHED) {
            document.body.classList.add('detached', 'detached-simple');
            // document.body.classList.remove('detached');
        } else if (layoutTypeName === LAYOUT_TYPE_NAME.CREATIVEDETACHED) {
            document.body.classList.add('detached');
            // document.body.classList.remove('detached', 'detached-simple');
        } else {
            // document.body.classList.remove('detached', 'detached-simple', 'detached');
        }
        dispatch(changeLayoutTypeNameReducer(layoutTypeName));
    } catch (error) {
        console.error("An error occurred while changing the layout type:", error);
    }
};
