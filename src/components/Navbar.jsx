import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="SportSee" />
      <nav>
        <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglages</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
