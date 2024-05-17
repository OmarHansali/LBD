import AboutSection4 from "../component/about/AboutSection4";
import AdmissionSection from "../component/admission/AdmissionSection";
import BreadcrumbSection from "../component/breadcrumb/BreadcrumbSection";
import CampusSection from "../component/campus/CampusSection";
import Layout7 from "../component/layout/Layout7";

const AboutPage4 = () => {
  return (
    <Layout7>
      <BreadcrumbSection title="About Four" style="" />
      <AboutSection4 />
      <CampusSection style="tl-4-campus" textBg="" />
      <AdmissionSection style="tl-4-admission-inner" />
    </Layout7>
  );
};

export default AboutPage4;
