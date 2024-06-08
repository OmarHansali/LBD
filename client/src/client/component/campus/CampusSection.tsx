import React from 'react';

interface CampusProps {
    style: string;
    textBg: string;
}

const CampusSection: React.FC<CampusProps> = ({style, textBg}) => {
  return (
    <section className={style}>
        <div className="row g-0">
            <div className="col-xxl-4 col-lg-3">
                <div className="tl-5-campus-img">
                    <img src="assets/images/tl-5/campus-1.jpg" alt="Students"/>
                </div>
            </div>
            <div className="col-xxl-4 col-lg-6">
                <div className={`tl-4-campus-txt ${textBg}`}>
                    <h2 className="tl-5-section-title">Réservez votre espace et faites partie de la vie dynamique du campus.</h2>
                    <a href="/reservation" className="tl-def-btn-2">Réservez Maintenant <i className="fa-regular fa-arrow-right-long"></i></a>
                </div>
            </div>
            <div className="col-xxl-4 col-lg-3">
                <div className="tl-5-campus-img">
                    <img src="assets/images/tl-5/campus-2.jpg" alt="Students"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CampusSection;
