import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="SportSee" />
      </Link>
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
