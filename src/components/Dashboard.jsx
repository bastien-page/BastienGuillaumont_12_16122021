import React from "react";
import { GetUserData } from "../services/getData";
import DailyActivity from "./dashboard/DailyActivity";
import Hello from "./dashboard/Hello";
import Radar from "./dashboard/Radar";
import Score from "./dashboard/Score";
import Session from "./dashboard/Session";

function Dashboard({ userId }) {
  return (
    <section className="dashboard">
      <Hello data="Test" />
      <section className="dashboard__charts">
        <div className="dashboard__charts-left">
          <DailyActivity />
          <div className="dashboard__charts-bottom">
            <Session />
            <Radar />
            <Score />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Dashboard;
