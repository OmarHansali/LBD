import { Link } from "react-router-dom";
import { useTalimContext } from "../../context/TalimContext";
// import { blogList } from "../../data/Data";
import React from "react";
interface FooterProps {
  style: string;
  lightLogo: string;
  darkLogo: string;
  foorterDesc: string;
  footerSocial: string;
  footerLink?: string;
}
const FooterSection5: React.FC<FooterProps> = ({
  style,
  lightLogo,
  darkLogo,
  foorterDesc,
  footerSocial,
  footerLink,
}) => {
  const { isDarkTheme } = useTalimContext();
  return (
    <footer className={`tl-footer tl-4-footer ${style}`}>
      <div className="tl-footer-top">
        <div className="container">
          <div className="row gy-5 justify-content-between">
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="tl-footer-widget tl-4-footer-widget">
                <Link to="/" className="logo tl-footer-widget-title">
                  <img src={isDarkTheme ? lightLogo : darkLogo} alt="logo" />
                </Link>

                <p className={foorterDesc}>
                  Réservez facilement avec Harmonia. Débloquez des espaces pour la créativité, la collaboration et l'apprentissage à portée de main.
                </p>
                <div className={footerSocial}>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 order-1 order-sm-2 order-lg-1">
              <div className="row gy-5">
                <div className="col-6 col-xxs-12">
                  <div className="tl-footer-widget tl-4-footer-widget">
                    <h5 className="tl-footer-widget-title tl-4-footer-widget-title">
                      Navigation
                    </h5>
                    <ul
                      className={`tl-footer-links tl-4-footer-links ${footerLink}`}
                    >
                      <li>
                        <Link to="/">Accueil</Link>
                      </li>
                      <li>
                        <Link to="/resource">Ressources</Link>
                      </li>
                      <li>
                        <Link to="/about">À propos</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link to="/reservation">Réservation</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-xxs-12">
                  <div className="tl-footer-widget tl-4-footer-widget">
                    <h5 className="tl-footer-widget-title tl-4-footer-widget-title">
                      Academics
                    </h5>
                    <ul
                      className={`tl-footer-links tl-4-footer-links ${footerLink}`}
                    >
                      <li>
                        <a href="#">Programming</a>
                      </li>
                      <li>
                        <a href="#">Art &amp; Design</a>
                      </li>
                      <li>
                        <a href="#">Business</a>
                      </li>
                      <li>
                        <a href="#">Engineering</a>
                      </li>
                      <li>
                        <a href="#">Photography</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-12 order-2 order-sm-1 order-lg-2">
              <div className="tl-footer-widget tl-3-footer-widget">
                <h5 className="tl-footer-widget-title tl-3-footer-widget-title">
                  Newsletter
                </h5>
                <p className="tl-3-nwsltr-txt">
                  Register now to get latest updates on promotions & coupons.
                </p>
                <form action="#" className="tl-3-nwsltr-form">
                  <input
                    type="email"
                    name="nwsltr-mail"
                    id="tl-3-nwsltr-mail"
                    className="tl-3-nwsltr-mail-input"
                    placeholder="Enter Your Email"
                  />
                  <button className="tl-3-def-btn" id="tl-3-nwsltr-btn">
                    Get Newsletter
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tl-footer-bottom tl-4-footer-bottom">
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-12">
              <p className="tl-4-copyright-txt m-0 text-center">
                Droits d'auteur © {new Date().getFullYear()} Tous droits réservés par Harmonia
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection5;
