import BreadcrumbSection from "../component/breadcrumb/BreadcrumbSection";
import ContactSection from "../component/contact/ContactSection";
import Layout7 from "../component/layout/Layout7";
import SocialSection from "../component/social/SocialSection";


const ContactPage1 = () => {
  return (
    <Layout7>
      <BreadcrumbSection title="Contact" style="" />
      <ContactSection />
            <SocialSection sectionStyle="bg-defaults" cardStyle="tl-4-social" />

    </Layout7>
  );
};

export default ContactPage1;
