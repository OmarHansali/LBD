import { Link } from "react-router-dom";
import { useTalimContext } from "../../context/TalimContext";

const AllBlogSection6 = () => {
  const { displayedBlogs3 } = useTalimContext();
  return (
    <section className="tl-inner-blogs pt-120 pb-50">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {displayedBlogs3.map((item) => (
            <div className="col-lg-4 col-sm-6" key={item.id}>
              <div className="tl-6-latest-article">
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

export default AllBlogSection6;
