import { Link } from 'react-router-dom';

const ProgramSection2 = () => {
  return (
    <section className="tl-9-programs tl-9-section-spacing">
      <div className="container">
        <div className="tl-9-section-heading">
          <h2 className="tl-9-section-title">
            Choisir une catégorie des salles
          </h2>
        </div>

        <div className="row justify-content-center gy-4">
          {/* -- Boxes Link -- */}
          <div className="col-lg-4 col-md-6">
            <div className="tl-9-program">
              <div className="tl-9-program-img">
                <img src="assets/images/tl-9/prog-1.jpg" alt="Program image" />
              </div>
              <div className="tl-9-program-txt">
                <h3 className="tl-9-program-title">Boxes</h3>
                <p className="tl-9-program-descr">
                  Réservez facilement vos boxes pour un travail individuel / petit groupe.
                </p>
                
                <Link to="/reserverClass"
                  state={{ category: 'box' }}
                  className="tl-9-program-btn">
                    Réserver 
                  <i className="fa-regular fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* -- FabLab Link -- */}
          <div className="col-lg-4 col-md-6">
            <div className="tl-9-program">
              <div className="tl-9-program-img">
                <img src="assets/images/tl-9/prog-2.jpg" alt="Program image" />
              </div>
              <div className="tl-9-program-txt">
                <h3 className="tl-9-program-title">FabLab</h3>
                <p className="tl-9-program-descr">
                  Accédez à notre FabLab pour vos projets innovants et créatifs.
                </p>
                
                <Link to="/reserverClass" state={{ category: 'fablab' }} className="tl-9-program-btn">
                  Réserver <i className="fa-regular fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* -- Salles Link -- */}
          <div className="col-lg-4 col-md-6">
            <div className="tl-9-program">
              <div className="tl-9-program-img">
                <img src="assets/images/tl-9/prog-3.jpg" alt="Program image" />
              </div>
              <div className="tl-9-program-txt">
                <h3 className="tl-9-program-title">Salles</h3>
                <p className="tl-9-program-descr">
                  Réservez des salles pour vos réunions, cours ou événements
                </p>
                <Link to="/reserverClass" state={{ category: 'salle' }} className="tl-9-program-btn">
                  Réserver <i className="fa-regular fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection2;
