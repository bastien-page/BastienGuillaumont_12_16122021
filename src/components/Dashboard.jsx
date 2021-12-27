import React from "react";
import { GetUserData } from "../services/getData";
import DailyActivity from "./dashboard/DailyActivity";
import Hello from "./dashboard/Hello";

function Dashboard({ userId }) {
  return (
    <section className="dashboard">
      <Hello data="Test" />
      <section className="dashboard__charts">
        <DailyActivity />
      </section>
    </section>
  );
}

export default Dashboard;
