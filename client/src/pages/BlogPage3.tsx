import BlogMain3 from "../component/blog/BlogMain3";
import BreadcrumbSection from "../component/breadcrumb/BreadcrumbSection";
import Layout3 from "../component/layout/Layout3";

const BlogPage3 = () => {
  return (
    <Layout3>
      <BreadcrumbSection title="Blog Three" style="tl-breadcrumb-3" />
      <BlogMain3 />
    </Layout3>
  );
};

export default BlogPage3;
