import React from "react";
import swim from "../assets/iconSwim.png";
import strength from "../assets/iconStrength.png";
import yoga from "../assets/iconYoga.png";
import cycling from "../assets/iconCycling.png";

function VerticalNavbar() {
  const sports = [yoga, swim, cycling, strength];
  return (
    <div className="verticalNavbar">
      <nav>
        <ul>
          {sports.map((sport, index) => (
            <li key={index} href="/">
              <img src={sport} alt="" />
            </li>
          ))}
        </ul>
      </nav>
      <div>Copyright, SportSee 2020</div>
    </div>
  );
}

export default VerticalNavbar;
