import AboutSection4 from "../component/about/AboutSection4";
import BannerSection4 from "../component/banner/BannerSection4";
import CampusSection from "../component/campus/CampusSection";
import ResearchSection from "../component/campus/ResearchSection";
import FooterSection5 from "../component/footer/FooterSection5";
import HeaderSection7 from "../component/header/HeaderSection7";
import TestimonialSlider2 from "../component/slider/TestimonialSlider2";
import SocialSection from "../component/social/SocialSection";

const HomePage4 = () => {
  return (
    <>
      <HeaderSection7
        style="red-clr"
        logo="assets/images/logos/logo_1.png"
      />
      <BannerSection4 />
      <AboutSection4 />
      <ResearchSection />
      <CampusSection style="tl-4-campus" textBg="" />
      <TestimonialSlider2 />
      <SocialSection sectionStyle="bg-defaults" cardStyle="tl-4-social" />
      <FooterSection5
        style=""
        darkLogo="assets/images/logos/logo_1_light.png"
        lightLogo="assets/images/logos/logo_1.png"
        foorterDesc="tl-4-footer-descr"
        footerSocial="tl-4-footer-socials"
      />
    </>
  );
};

export default HomePage4;
