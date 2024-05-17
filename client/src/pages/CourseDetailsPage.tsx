import { useParams } from "react-router-dom";
import BreadcrumbSection from "../component/breadcrumb/BreadcrumbSection";
import CourseDetailSection from "../component/course/CourseDetailSection";
import ErrorSection from "../component/error/ErrorSection";
import Layout5 from "../component/layout/Layout5";
import { courseList } from "../data/Data";

const CourseDetailsPage = () => {
  const { courseSlug } = useParams();
  const courseInfo = courseList.find((item) => item.slug === courseSlug);

  return (
    <Layout5>
      <BreadcrumbSection title="Course Details" style="" />
      {courseInfo ? (
        <CourseDetailSection courseData={courseInfo} />
      ) : (
        <ErrorSection type="course" />
      )}
    </Layout5>
  );
};

export default CourseDetailsPage;
