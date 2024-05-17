import BreadcrumbSection from "../component/breadcrumb/BreadcrumbSection";
import CourseMainSection from "../component/course/CourseMainSection";
import Layout from "../component/layout/Layout";

const CoursePage1 = () => {
  return (
    <Layout>
      <BreadcrumbSection title="Course One" style="" />
      <CourseMainSection />
    </Layout>
  );
};

export default CoursePage1;
