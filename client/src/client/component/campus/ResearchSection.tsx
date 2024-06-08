const ResearchSection = () => {
  const classData = [
    {
      imgSrc: "assets/images/tl-4/innov-3.jpg",
      iconSrc: "assets/images/tl-4/innov-icon-1.png",
      className: "Boxes",
      classDescr: "Réservez facilement vos boxes pour un travail individuel ou en petit groupe.",
    },
    {
      imgSrc: "assets/images/tl-4/innov-2.jpg",
      iconSrc: "assets/images/tl-4/innov-icon-2.png",
      className: "FabLab",
      classDescr: "Accédez à notre FabLab pour vos projets innovants et créatifs.",
    },
    {
      imgSrc: "assets/images/tl-4/innov-1.jpg",
      iconSrc: "assets/images/tl-4/innov-icon-3.png",
      className: "Salles",
      classDescr: "Réservez des salles pour vos réunions, cours ou événements.",
    },
  ];
  return (
    <section className="tl-4-innovs tl-3-section-spacing">
      <div className="container">
        <div className="tl-4-innovs-heading">
          <h2 className="tl-4-section-title">Optimisation des Espaces</h2>
          <p className="tl-4-innovs-heading-txt">
            Simplifiez la gestion de vos réservations à l'École Centrale de Casablanca.
          </p>
        </div>

        <div className="row tl-7-classes-row">
          {classData.map((classItem, index) => (
            <div className="col-lg-4 col-sm-6" key={index}>
              <div className="tl-7-class tl-4-innov">
                <div className="tl-7-class-img">
                  <img src={classItem.imgSrc} alt="Innovation Background" />
                </div>
                <div className="tl-7-class-txt">
                  <div className="tl-7-class-icon">
                    <img src={classItem.iconSrc} alt="Class icon" />
                  </div>
                  <h3 className="tl-7-class-name">{classItem.className}</h3>
                  <p className="tl-7-class-descr">{classItem.classDescr}</p>
                  <a href="/reservation" className="tl-7-class-btn">
                    Réserver <i className="fa-regular fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
