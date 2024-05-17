import AboutSection7 from "../component/about/AboutSection7";
import BreadcrumbSection from "../component/breadcrumb/BreadcrumbSection";
import CtaSection4 from "../component/cta/CtaSection4";
import Layout5 from "../component/layout/Layout5";
import PricingSection from "../component/pricing/PricingSection";

const AboutPage7 = () => {
  return (
    <Layout5>
      <BreadcrumbSection title="About Seven" style="" />
      <AboutSection7 />
      <PricingSection />
      <CtaSection4 style="tl-8-cta-inner" />
    </Layout5>
  );
};

export default AboutPage7;
