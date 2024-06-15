import ThemeBtnSection from "../theme-btn/ThemeBtnSection";
import SidebarSection from "../sidebar/SidebarSection";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  const location = useLocation()
  const isAuthenticated = !!localStorage.getItem('user');


  if (!isAuthenticated && location.pathname.startsWith('/admin')) {
    return <Navigate to={"/login"} replace/>
  }
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
