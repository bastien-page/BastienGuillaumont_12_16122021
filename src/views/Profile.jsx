import React from "react";
import { useParams } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";
import VerticalNavbar from "../components/VerticalNavbar";

function Profile() {
  let { id } = useParams();

  return (
    <div className="profile">
      <Navbar />
      <section className="profile__main">
        <VerticalNavbar />
        <Dashboard userId={id} />
      </section>
    </div>
  );
}

export default Profile;
