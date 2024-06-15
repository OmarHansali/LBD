/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logodark from "/assets/images/logos/logo_1_light.png";
import logolight from "/assets/images/logos/logo_1.png";
// import logodark from "/assets/images/logo-dark.svg";
// import logoicon from "/assets/images/logo-icon.svg";
import { sidebarData } from "../../constants/SidebarLinks";
import { useSelector } from "react-redux";
import { CloseIcon } from "./icons/SVGIcons";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../state/features/slices/sideBar";

const Sidebar = (isSidebarSize: any) => {

    const isSidebarOpen = useSelector((state: any) => state.sidebar);
    const dispatch = useDispatch()

    const handleToggle = () => {
        dispatch(toggleSidebar());
    };


    const location = useLocation();
    const storedData = localStorage.getItem("activeMenu");
    const [activeMenu, setActiveMenu] = useState(() => {
        return JSON.parse(storedData as any) || null;
    });

    const toggleSubMenu = (menu: any) => {
        localStorage.setItem(
            "activeMenu",
            JSON.stringify(activeMenu === menu ? null : menu)
        );
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    const currentThemeMode = useSelector((state: any) => state.layout.currentLayoutMode)


    return (
        <React.Fragment>
            <nav className="sidebar fixed z-[9999] flex-none w-[240px] ltr:border-r rtl:border-l dark:bg-darkborder border-black/10 transition-all duration-300 overflow-hidden">
                <div
                    className={`h-full bg-white dark:bg-darklight border-r-[1px] sm:hidden xs:hidden lg:block`}
                >
                    <div className="py-4 flex justify-center">
                        <Link to="/admin/dashboard" className="w-full main-logo">
                            {/* dark:hidden */}
                            {
                                currentThemeMode == "dark" ? (<img
                                    src={logolight}
                                    className="mx-auto light-logo h-14 logo dark:block"
                                    alt="logo"
                                />) :
                                    (<img
                                        src={logodark}
                                        className="mx-auto dark-logo h-14 logo"
                                        alt="logo"
                                    />)
                            }


                            {/* <img
                                src={logoicon}
                                className=" mx-auto logo-icon h-7"
                                alt=""
                            /> */}
                        </Link>
                    </div>
                    <div className="h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden px-4 pb-4 space-y-16 detached-menu">
                        <ul className="relative flex flex-col gap-1">
                            {(sidebarData || []).map((item: any, key: any) => (
                                <React.Fragment key={key}>
                                    {item.isTitle ? (
                                        <h2 className="my-2 text-sm text-black/50 dark:text-white/30">
                                            <span>{item.label}</span>
                                        </h2>
                                    ) : item.subItems ? (
                                        <>
                                            {isSidebarSize && (
                                                <li className="menu nav-item">
                                                    <Link
                                                        to="#"
                                                        className={`items-center justify-between text-blac nav-link group ${activeMenu === key ||
                                                            item.subItems.some(
                                                                (subitem: any) =>
                                                                    location.pathname === subitem.link
                                                            )
                                                            ? "active"
                                                            : ""
                                                            }`}
                                                        onClick={() => toggleSubMenu(key)}
                                                    >
                                                        <div className="flex items-center space-x-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                className="w-5 h-5"
                                                            >
                                                                <path d={item.icon} fill="currentColor"></path>
                                                            </svg>
                                                            <span className="ltr:pl-1.5 rtl:pr-1.5">
                                                                {item.label}
                                                            </span>
                                                        </div>
                                                        <div
                                                            className={`flex items-center justify-center w-4 h-4 dropdown-icon ${activeMenu === key ? "!rotate-180" : ""
                                                                }`}
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                className="w-6 h-6"
                                                            >
                                                                <path
                                                                    d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"
                                                                    fill="currentColor"
                                                                ></path>
                                                            </svg>
                                                        </div>
                                                    </Link>
                                                </li>
                                            )}
                                            <ul
                                                style={{
                                                    display:
                                                        isSidebarSize && activeMenu === key ? "" : "none",
                                                }}
                                                className="flex flex-col gap-1 sub-menu ml-5 dark:text-white/80"
                                            >
                                                {item.subItems.map((subitem: any, subkey: any) => (
                                                    <React.Fragment key={subkey}>
                                                        {!subitem.subItems && (
                                                            <li>
                                                                <Link
                                                                    to={subitem.link}
                                                                    className={
                                                                        location.pathname === subitem.link
                                                                            ? "active bg-indigo-100"
                                                                            : ""
                                                                    }
                                                                >
                                                                    {subitem.label}
                                                                </Link>
                                                            </li>
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </ul>
                                        </>
                                    ) : (
                                        <li className="menu nav-item">
                                            <Link
                                                to={item.link}
                                                className={`items-center justify-between my-1 py-2 px-0.5 ${location.pathname == item.link ? "active-nav-link" : ""
                                                    }`}
                                                onClick={() => toggleSubMenu(key)}
                                            >
                                                <div className="flex items-center space-x-1">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        className="w-5 h-5"
                                                    >
                                                        <path d={item.icon} fill="currentColor"></path>
                                                    </svg>
                                                    <span className="ltr:pl-1.5 rtl:pr-1.5">
                                                        {item.label}
                                                    </span>
                                                </div>
                                            </Link>
                                        </li>
                                    )}
                                </React.Fragment>
                            ))}
                        </ul>

                    </div>
                </div>


                {/* small devices */}


                {
                    isSidebarOpen &&
                    <div
                        className={`h-full bg-white dark:bg-darklight border-r-[1px] relative`}
                    >
                        
                            <div className="absolute hover:text-gray-400 right-2 top-2 xs:block sm:block">
                                <CloseIcon fontSize={30} onClick={handleToggle} />
                            </div>
                        <div className="py-4 flex justify-center">
                            <Link to="/admin/dashboard" className="w-full main-logo">
                                {/* dark:hidden */}
                                {
                                    currentThemeMode == "dark" ? (<img
                                        src={logolight}
                                        className="mx-auto light-logo h-14 logo dark:block"
                                        alt="logo"
                                    />) :
                                        (<img
                                            src={logodark}
                                            className="mx-auto dark-logo h-14 logo"
                                            alt="logo"
                                        />)
                                }


                                {/* <img
                                src={logoicon}
                                className=" mx-auto logo-icon h-7"
                                alt=""
                            /> */}
                            </Link>
                        </div>
                        <div className="h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden px-4 pb-4 space-y-16 detached-menu">
                            <ul className="relative flex flex-col gap-1">
                                {(sidebarData || []).map((item: any, key: any) => (
                                    <React.Fragment key={key}>
                                        {item.isTitle ? (
                                            <h2 className="my-2 text-sm text-black/50 dark:text-white/30">
                                                <span>{item.label}</span>
                                            </h2>
                                        ) : item.subItems ? (
                                            <>
                                                {isSidebarSize && (
                                                    <li className="menu nav-item">
                                                        <Link
                                                            to="#"
                                                            className={`items-center justify-between text-blac nav-link group ${activeMenu === key ||
                                                                item.subItems.some(
                                                                    (subitem: any) =>
                                                                        location.pathname === subitem.link
                                                                )
                                                                ? "active"
                                                                : ""
                                                                }`}
                                                            onClick={() => toggleSubMenu(key)}
                                                        >
                                                            <div className="flex items-center space-x-2">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                    className="w-5 h-5"
                                                                >
                                                                    <path d={item.icon} fill="currentColor"></path>
                                                                </svg>
                                                                <span className="ltr:pl-1.5 rtl:pr-1.5">
                                                                    {item.label}
                                                                </span>
                                                            </div>
                                                            <div
                                                                className={`flex items-center justify-center w-4 h-4 dropdown-icon ${activeMenu === key ? "!rotate-180" : ""
                                                                    }`}
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                    className="w-6 h-6"
                                                                >
                                                                    <path
                                                                        d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"
                                                                        fill="currentColor"
                                                                    ></path>
                                                                </svg>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                )}
                                                <ul
                                                    style={{
                                                        display:
                                                            isSidebarSize && activeMenu === key ? "" : "none",
                                                    }}
                                                    className="flex flex-col gap-1 sub-menu ml-5 dark:text-white/80"
                                                >
                                                    {item.subItems.map((subitem: any, subkey: any) => (
                                                        <React.Fragment key={subkey}>
                                                            {!subitem.subItems && (
                                                                <li>
                                                                    <Link
                                                                        to={subitem.link}
                                                                        className={
                                                                            location.pathname === subitem.link
                                                                                ? "active bg-indigo-100"
                                                                                : ""
                                                                        }
                                                                    >
                                                                        {subitem.label}
                                                                    </Link>
                                                                </li>
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </ul>
                                            </>
                                        ) : (
                                            <li className="menu nav-item">
                                                <Link
                                                    to={item.link}
                                                    className={`items-center justify-between my-1 py-2 px-0.5 ${location.pathname == item.link ? "active-nav-link" : ""
                                                        }`}
                                                    onClick={() => toggleSubMenu(key)}
                                                >
                                                    <div className="flex items-center space-x-1">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            className="w-5 h-5"
                                                        >
                                                            <path d={item.icon} fill="currentColor"></path>
                                                        </svg>
                                                        <span className="ltr:pl-1.5 rtl:pr-1.5">
                                                            {item.label}
                                                        </span>
                                                    </div>
                                                </Link>
                                            </li>
                                        )}
                                    </React.Fragment>
                                ))}
                            </ul>

                        </div>
                    </div>}
            </nav>
        </React.Fragment>
    );
};

export default Sidebar;

