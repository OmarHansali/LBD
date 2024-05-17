import { useParams } from "react-router-dom";
import BlogDetailSection from "../component/blog/BlogDetailSection";
import BreadcrumbSection from "../component/breadcrumb/BreadcrumbSection";
import ErrorSection from "../component/error/ErrorSection";
import Layout5 from "../component/layout/Layout5";
import { blogList } from "../data/Data";

const BlogDetailsPage = () => {
  const { blogSlug } = useParams();
  const blogData = blogList.find((item) => item.slug === blogSlug);

  return (
    <Layout5>
      <BreadcrumbSection title="Blog Details" style="" />
      {blogData ? (
        <BlogDetailSection blogData={blogData} />
      ) : (
        <ErrorSection type="blog" />
      )}
    </Layout5>
  );
};

export default BlogDetailsPage;
