import ThemeBtnSection from "../theme-btn/ThemeBtnSection";
import SidebarSection from "../sidebar/SidebarSection";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  const location = useLocation()
  return (
    <>
      {
        location.pathname.startsWith('/admin') ? null :
          <ThemeBtnSection />
      }
      <SidebarSection />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default RootLayout;
