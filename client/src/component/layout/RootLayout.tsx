import ThemeBtnSection from "../theme-btn/ThemeBtnSection";
import SidebarSection from "../sidebar/SidebarSection";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
    <>
      <ThemeBtnSection />
      <SidebarSection />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default RootLayout;
