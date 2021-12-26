import React from "react";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";
import VerticalNavbar from "../components/VerticalNavbar";

function Profile() {
  return (
    <div className="profile">
      <Navbar />
      <section className="profile__main">
        <VerticalNavbar />
        <Dashboard userName="Test" />
      </section>
    </div>
  );
}

export default Profile;
