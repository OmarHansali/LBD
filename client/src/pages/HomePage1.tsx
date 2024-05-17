import AboutSection from "../component/about/AboutSection";
import BannerSection from "../component/banner/BannerSection";
import SubBannerSection from "../component/banner/SubBannerSection";
import BlogSection from "../component/blog/BlogSection";
import CourseSection from "../component/course/CourseSection";
import FooterSection from "../component/footer/FooterSection";
import HeaderSection from "../component/header/HeaderSection";
import ServiceSection from "../component/service/ServiceSection";
import TeacherSlider from "../component/slider/TeacherSlider";
import TestimonialSlider from "../component/slider/TestimonialSlider";

const HomePage1 = () => {
  return (
    <>
      <HeaderSection />
      <BannerSection />
      <ServiceSection />
      <AboutSection />
      <CourseSection />
      <TestimonialSlider padding="pt-120 pb-120" />
      <SubBannerSection />
      <TeacherSlider padding="pt-120 pb-120" />
      <BlogSection />
      <FooterSection footerStyle="kb-10-footer" />
    </>
  );
};

export default HomePage1;
