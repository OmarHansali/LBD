import { Link } from "react-router-dom";
import { blogList } from "../../data/Data";

const BlogSection10 = () => {
  return (
    <section className="tl-14-blogs tl-3-section-spacing">
      <div className="container">
        <div className="tl-14-section-heading">
          <h2 className="tl-14-section-title">Latest News Blogs & Articles.</h2>
          <a href="#" className="tl-14-section-heading-action">
            View All Blog <i className="fa-regular fa-arrow-right"></i>
          </a>
        </div>

        <div className="row g-xl-4 g-3 justify-content-center justify-content-md-around">
          {blogList.slice(0, 2).map((item) => (
            <div className="col-xl-6 col-lg-10 " key={item.id}>
              <div className="tl-single-blog tl-14-blog">
                <div className="tl-single-blog-img">
                  <img src={item.imgSrc} alt="Blog Thumbnail" />
                </div>

                <div className="tl-single-blog-txt tl-14-blog-txt">
                  <ul className="tl-11-latest-article-infos tl-14-blog-infos">
                    <li>{item.date}</li>
                    <li>{item.category}</li>
                  </ul>
                  <h4 className="tl-single-blog-title">
                    <Link to={`/blog/${item.slug}`}>{item.title}</Link>
                  </h4>
                  <Link
                    className="tl-single-blog-btn"
                    to={`/blog/${item.slug}`}
                  >
                    Read More <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection10;
