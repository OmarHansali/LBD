import { Link } from "react-router-dom";
import { blogList } from "../../data/Data";

const ArticleSection = () => {
  return (
    <section className="tl-6-latest-articles pt-120 pb-120">
      <div className="container">
        <h2 className="tl-6-section-title">Latest Articles</h2>

        <div className="row g-4 tl-6-latest-articles-row justify-content-center">
          {blogList.slice(10, 13).map((item, index) => (
            <div className="col-lg-4 col-sm-6" key={index}>
              <div
                className={`tl-6-latest-article ${
                  index === 1 ? "tl-6-latest-article-center" : ""
                }`}
              >
                <div className="tl-6-latest-article-img">
                  <img src={item.imgSrc} alt="Article Image" />
                </div>

                <div className="tl-6-latest-article-txt">
                  <span className="tl-6-info-pill">{item.category}</span>
                  <h4 className="tl-6-latest-article-title tl-6-title-hover">
                    <Link to={`/blog/${item.slug}`}>{item.title}</Link>
                  </h4>
                  <ul className="tl-6-latest-article-infos">
                    <li>By {item.author}</li>
                    <li>{item.date}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
