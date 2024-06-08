/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { ReactNode, useEffect, useRef, useState } from "react";
// import PageRouter from ;
import Sidebar from "../components/Sidebar";

import bgmain from "../../../public/assets/images/bg-main.png";
import Topbar from "../components/Topbar";
// import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

// import { createSelector } from "reselect";
// import { useDispatch, useSelector } from "react-redux";

// import { useNavigate } from "react-router-dom";

const AdminLayout = () => {
    // const dispatch = useDispatch<any>();
    // const history = useNavigate();

    // const { userProfile, loading, token } = useProfile();

    // useEffect(() => {
    //     if (userProfile && !loading && token) {
    //         setAuthorization(token);
    //     } else if (!userProfile && loading && !token) {
    //         dispatch(logoutUser(history));
    //     }
    // }, [token, userProfile, loading, history, dispatch]);

    // const selectLayoutState = (state: any) => state.Layout;
    // const selectLayoutProperties = createSelector(
    //     selectLayoutState,
    //     (layout: any) => ({
    //         currentLayoutMode: layout.currentLayoutMode,
    //     })
    // );

    // State from Redux
    // const { currentLayoutMode } = useSelector(selectLayoutProperties);
    // useEffect(() => {
    //     if (currentLayoutMode) {
    //         window.dispatchEvent(new Event("resize"));
    //         dispatch(changeLayoutMode(currentLayoutMode));
    //         // dispatch(changeLayoutDirection(currentLayoutDirection));
    //         // dispatch(changeLayoutType(currentLayoutType));
    //         // dispatch(changeLayoutTypeName(currentLayoutTypeName))
    //     }
    // }, [currentLayoutMode, dispatch]);

    //  Dark & Light
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        // const newMode =
        //     currentLayoutMode === LAYOUT_MODE.LIGHT
        //         ? LAYOUT_MODE.DARK
        //         : LAYOUT_MODE.LIGHT;

        // // Dispatch the changeLayoutMode action
        // dispatch(changeLayoutMode(newMode));
    };
    // Ltr & Rtl
    // const [isDirection, setIsDirection] = useState(false);

    // const toggleDirection = () => {
    //     setIsDirection(!isDirection);
    //     const newDirection = isDirection ? "ltr" : "rtl";
    //     dispatch(changeLayoutDirection(newDirection));
    // };

    // lg sm Sidebar
    const [isSidebarSize, setIsSidebarSize] = useState(false);

    const toggleSidebarCollapse = () => {
        document.body.classList.toggle('toggle-sidebar');
        setIsSidebarSize(!isSidebarSize)
    };


    return (
        <>
            <div className="bg-[#f9fbfd] dark:bg-dark text-black">
                {/* Start detached bg */}
                <div
                    className="bg-black min-h-[220px] sm:min-h-[250px] bg-bottom fixed hidden w-full -z-50 detached-img"
                    style={{ backgroundImage: `url(${bgmain})` }}
                ></div>
                {/* End detached bg */}

                {/* Start Menu Sidebar Overlay */}
                <div
                    className={`fixed inset-0 bg-black/60 dark:bg-dark/90 z-[999] lg:hidden ${isSidebarSize ? '' : 'hidden'}`}
                    onKeyDown={toggleSidebarCollapse}
                    onClick={toggleSidebarCollapse}
                ></div>
                {/* End Menu Sidebar Overlay */}

                <div className="flex mx-auto main-container">
                    <Sidebar isSidebarSize={isSidebarSize} />
                    <div className="flex-1 main-content">
                        {/* Topbar */}
                        <Topbar
                            isDarkMode={isDarkMode}
                            toggleDarkMode={toggleDarkMode}
                            toggleSidebarCollapse={toggleSidebarCollapse}
                        />
                        <div className="h-[calc(100vh-60px)]  relative overflow-y-auto overflow-x-hidden p-4 space-y-4 detached-content">
                            <Outlet />
                            {/* <Footer /> */}
                        </div>
                        {/* <button
                            type="button"
                            className="fixed z-50 px-4 text-white border-gray-200 shadow-lg h-11 ltr:right-0 rtl:left-0 bg-purple ltr:rounded-l-md rtl:rounded-r-md top-1/3"
                            onClick={toggleDirection}
                        >
                            {isDirection === false ? (
                                <span className="rtl:hidden">RTL</span>
                            ) : (
                                <span className="ltr:hidden">LTR</span>
                            )}
                        </button> */}
                    </div>
                </div>
            </div>
            {/* } */}
        </>
    );
};

export default AdminLayout;
