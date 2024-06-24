const AboutSection4 = () => {
  return (
    <section className="tl-4-about tl-3-section-spacing">
      <div className="container">
        <div className="row gy-4 gy-sm-5 align-items-center">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="tl-3-about-img tl-4-about-img">
              <img
                src="assets/images/tl-4/about-img-1.jpg"
                alt="School Picture"
              />
              <img
                src="assets/images/tl-4/about-img-2.jpg"
                alt="School Picture"
              />
            </div>
          </div>

          <div className="col-lg-6 order-lg-2 order-1">
            <div className="tl-4-about-txt">
              <h2 className="tl-4-section-title">
                Expertise en gestion scolaire
              </h2>
              <p className="tl-4-about-descr">
                Harmonia simplifie la réservation des espaces de travail à l'École Centrale de Casablanca. Notre vision est de devenir l'outil principal de réservation, offrant une expérience utilisateur exceptionnelle et une gestion transparente des ressources partagées. Nous proposons une plateforme conviviale, une gestion intelligente des ressources, mettant en valeur la richesse des infrastructures de l'école, une accessibilité équitable, et un système fiable de réservation.
              </p>

              <div className="tl-4-about-stats">
                <div className="tl-4-about-stat">
                  <div className="tl-4-about-stat-txt">
                    <span className="tl-4-about-stat-num">8</span>
                    <span className="tl-4-about-stat-name box">Boxes</span>
                  </div>
                </div>

                <div className="tl-4-about-stat">
                  <div className="tl-4-about-stat-txt">
                    <span className="tl-4-about-stat-num">1</span>
                    <span className="tl-4-about-stat-name fablab">
                      Fablab
                    </span>
                  </div>
                </div>

                <div className="tl-4-about-stat">
                  <div className="tl-4-about-stat-txt">
                    <span className="tl-4-about-stat-num">12</span>
                    <span className="tl-4-about-stat-name salle">
                      Salles
                    </span>
                  </div>
                </div>
                
              </div>

              <div className="tl-4-about-txt-bottom">
                <a href="/reservation" className="tl-def-btn tl-4-def-btn">
                  Réserver <i className="fa-light fa-angle-right"></i>
                </a>

                <div className="tl-4-about-support">
                  <img
                    src="assets/images/tl-4/support.png"
                    alt="support icon"
                  />
                  <div>
                    <span className="tl-4-about-support-txt">Obtenir de l'aide</span>
                    <a
                      href="mailto:info@harmonia.com"
                      className="tl-4-about-support-mail"
                    >
                      info@harmonia.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection4;
