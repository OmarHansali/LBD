import React from "react";

interface NavProps {
  ulPosition: string;
  liStyle: string;
}

const NavSection: React.FC<NavProps> = ({ ulPosition, liStyle }) => {
  return (
    <ul className={ulPosition}>
      <li className={`tl-nav-item ${liStyle} `}>
        <a role="button" href="/">
          Accueil
        </a>
      </li>

      <li className={`tl-nav-item ${liStyle} `}>
        <a role="button" href="/resource">
          Ressources
        </a>
      </li>

      <li className={`tl-nav-item ${liStyle} `}>
        <a role="button" href="/about" style={{ whiteSpace: "nowrap" }}>
          À propos
        </a>
      </li>

      <li className={`tl-nav-item ${liStyle} `}>
        <a role="button" href="/contact">
          Contact
        </a>
      </li>

      <li className={`tl-nav-item ${liStyle} `}>
        <a role="button" href="/reservation">
          Réservation
        </a>
      </li>

    </ul>
  );
};

export default NavSection;
