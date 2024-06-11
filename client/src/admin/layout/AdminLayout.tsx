/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { ReactNode, useEffect, useRef, useState } from "react";
// import PageRouter from ;
import Sidebar from "../components/Sidebar";

import bgmain from "../../../public/assets/images/bg-main.png";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleLayoutModeReducer } from "../../state/features/slices/reducer";
import { THEME_MODE } from "../../constants/layoutType";
import { Toaster } from "react-hot-toast";

// import { createSelector } from "reselect";
// import { useDispatch, useSelector } from "react-redux";

// import { useNavigate } from "react-router-dom";

const AdminLayout = () => {

    const dispatch = useDispatch();
    //  Dark & Light
    const currentThemeMode = useSelector((state: any) => state.layout.currentLayoutMode)
    const [isDarkMode, setIsDarkMode] = useState(currentThemeMode == "dark" ? true : false);

    const toggleDarkMode = () => {
        dispatch(toggleLayoutModeReducer());
        setIsDarkMode(!isDarkMode)
    };

    useEffect(() => {
        if (currentThemeMode === THEME_MODE.DARK) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [currentThemeMode]);

    // lg sm Sidebar
    const [isSidebarSize, setIsSidebarSize] = useState(false);

    const toggleSidebarCollapse = () => {
        document.body.classList.toggle('toggle-sidebar');
        setIsSidebarSize(!isSidebarSize)
    };


    return (
        <>
            <div>
                <Toaster containerClassName="mt-3" />
            </div>

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
                    </div>
                </div>
            </div>
            {/* } */}
        </>
    );
};

export default AdminLayout;
