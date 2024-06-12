import React from "react";
import { Link } from "react-router-dom";

interface NavProps {
  ulPosition: string;
  liStyle: string;
}

const NavSection: React.FC<NavProps> = ({ ulPosition, liStyle }) => {
  return (
    <ul className={ulPosition}>
      <li className={`tl-nav-item ${liStyle} `}>
        <Link role="button" to="/">
          Accueil
        </Link>
      </li>

      <li className={`tl-nav-item ${liStyle} `}>
        <Link role="button" to="/resource">
          Ressources
        </Link>
      </li>

      <li className={`tl-nav-item ${liStyle} `}>
        <Link role="button" to="/about" style={{ whiteSpace: "nowrap" }}>
          À propos
        </Link>
      </li>

      <li className={`tl-nav-item ${liStyle} `}>
        <Link role="button" to="/contact">
          Contact
        </Link>
      </li>

      <li className={`tl-nav-item ${liStyle} `}>
        <Link role="button" to="/reservation">
          Réservation
        </Link>
      </li>

    </ul>
  );
};

export default NavSection;
