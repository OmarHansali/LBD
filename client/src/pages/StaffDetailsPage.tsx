import { useParams } from "react-router-dom";
import BreadcrumbSection from "../component/breadcrumb/BreadcrumbSection";
import ErrorSection from "../component/error/ErrorSection";
import Layout from "../component/layout/Layout";
import TeacherDetailSection from "../component/teacher/TeacherDetailSection";
import { teacherList } from "../data/Data";

const StaffDetailsPage = () => {
  const { staffSlug } = useParams();
  const teacherData = teacherList.find((item) => item.slug === staffSlug);

  return (
    <Layout>
      <BreadcrumbSection title="Staff Details" style="" />
      {teacherData ? (
        <TeacherDetailSection data={teacherData} />
      ) : (
        <ErrorSection type="staff" />
      )}
    </Layout>
  );
};

export default StaffDetailsPage;
