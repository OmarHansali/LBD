import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BannerSection4 = () => {
  // Define an array of slide data objects
const slideData = [
  {
    subTitle: "Trouvez votre espace",
    title: "Réservez l'endroit idéal pour créer, explorer et réussir.",
    description:
      "Explorez une gamme d'espaces inspirants, des salles polyvalentes aux laboratoires spécialisés, pour concrétiser vos projets et stimuler votre créativité.",
  },
  {
    subTitle: "Libérez votre potentiel",
    title: "Donnez vie à vos idées avec nos espaces dynamiques.",
    description:
      "Des salles de réunion aux studios de design, nos espaces sont conçus pour favoriser l'innovation et vous aider à atteindre vos objectifs.",
  },
  {
    subTitle: "Réservez en toute simplicité",
    title: "Planifiez votre succès avec notre système de réservation convivial.",
    description:
      "Grâce à notre plateforme intuitive, réservez rapidement et facilement l'espace dont vous avez besoin, où que vous soyez, pour donner vie à vos projets les plus ambitieux.",
  },
];



  return (
    <section className="tl-4-banner">
      <Swiper
        className="tl-4-banner-slider owl-carousel"
        loop={true}
        autoplay={true}
        pagination={{
          el: ".tl-4-banner-slider-dots",
          bulletClass: "owl-dot",
          bulletElement: "button",
          bulletActiveClass: "active",
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {slideData.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`tl-4-banner-slide slide-${index + 1} bg-defaults`}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-9 col-10 col-xxs-12">
                  <div className="tl-4-banner-txt">
                    <h6 className="tl-4-banner-sub-title">{slide.subTitle}</h6>
                    <h1 className="tl-4-banner-title">{slide.title}</h1>
                    <p className="tl-4-banner-descr">{slide.description}</p>
                    <a href="#" className="tl-4-banner-btn">
                      Plus de details <i className="fa-light fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="tl-4-banner-slider-dots"></div>
    </section>
  );
};

export default BannerSection4;
