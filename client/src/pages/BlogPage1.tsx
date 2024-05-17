import BlogMain1 from "../component/blog/BlogMain1";
import BreadcrumbSection from "../component/breadcrumb/BreadcrumbSection";
import Layout from "../component/layout/Layout";

const BlogPage1 = () => {
  return (
    <Layout>
      <BreadcrumbSection title="Blog One" style="" />
      <BlogMain1 />
    </Layout>
  );
};

export default BlogPage1;
