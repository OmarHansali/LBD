import BreadcrumbSection from "../component/breadcrumb/BreadcrumbSection";
import ErrorSection from "../component/error/ErrorSection";
import Layout5 from "../component/layout/Layout5";

const NotFoundPage = () => {
  return (
    <Layout5>
      <BreadcrumbSection title="Page 404" style="" />
      <ErrorSection type="page" />
    </Layout5>
  );
};

export default NotFoundPage;
