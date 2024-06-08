import BreadcrumbSection from "../component/breadcrumb/BreadcrumbSection";
import ErrorSection from "../component/error/ErrorSection";
import Layout7 from "../component/layout/Layout7";

const NotFoundPage = () => {
  return (
    <Layout7>
      <BreadcrumbSection title="Page 404" style="" />
      <ErrorSection type="page" />
    </Layout7>
  );
};

export default NotFoundPage;
