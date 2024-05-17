import AboutSection2 from "../component/about/AboutSection2";
import BreadcrumbSection from "../component/breadcrumb/BreadcrumbSection";
import CtaSection from "../component/cta/CtaSection";
import Layout6 from "../component/layout/Layout6";
import TestimonialSection from "../component/testimonial/TestimonialSection";

const AboutPage2 = () => {
  return (
    <Layout6>
      <BreadcrumbSection title="About Two" style="tl-breadcrumb-2" />
      <AboutSection2 />
      <TestimonialSection />
      <CtaSection />
    </Layout6>
  );
};

export default AboutPage2;
