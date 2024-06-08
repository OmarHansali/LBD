import React from "react";
import HeaderSection7 from "../header/HeaderSection7";
import FooterSection5 from "../footer/FooterSection5";
import { useTalimContext } from "../../context/TalimContext";

interface LayoutProps {
  children: any;
}
const Layout7: React.FC<LayoutProps> = ({ children }) => {
  const { isDarkTheme } = useTalimContext();
  return (
    <div className={`tl-inner-courses-body ${isDarkTheme ? "dark_mode" : ""}`}>
      <HeaderSection7
        style="tl-4-header-inner"
        logo="assets/images/logos/logo_1.png"
      />
      {children}
      <FooterSection5
        style=""
        darkLogo="assets/images/logos/logo_1_light.png"
        lightLogo="assets/images/logos/logo_1.png"
        foorterDesc="tl-4-footer-descr"
        footerSocial="tl-4-footer-socials"
      />
    </div>
  );
};

export default Layout7;
