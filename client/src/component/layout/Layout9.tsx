import React from "react";
import HeaderSection9 from "../header/HeaderSection9";
import FooterSection7 from "../footer/FooterSection7";

interface LayoutProps {
  children: any;
}
const Layout9: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderSection9
        darkLogo="assets/images/logos/logo-dark.png"
        lightLogo="assets/images/logos/logo.png"
      />
      {children}
      <FooterSection7
        logo="assets/images/logos/logo.png"
        style=""
        descStyle=""
        socialStyle=""
      />
    </>
  );
};

export default Layout9;
