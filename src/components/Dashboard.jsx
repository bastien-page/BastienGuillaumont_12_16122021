import React from "react";

import DailyActivity from "./dashboard/DailyActivity";
import Hello from "./dashboard/Hello";
import KeyData from "./dashboard/KeyData";
import RadarUser from "./dashboard/Radar";
import Score from "./dashboard/Score";
import Session from "./dashboard/Session";

import { useParams } from "react-router-dom";

/**
 * Create Dashboardcomponent
 * @returns {React Component}
 */

function Dashboard() {
  const { id } = useParams();
  const userId = id;

  return (
    <section className="dashboard">
      <Hello userId={userId} />
      <section className="dashboard__charts">
        <div className="dashboard__charts-left">
          <DailyActivity userId={userId} />
          <div className="dashboard__charts-bottom">
            <Session userId={userId} />
            <RadarUser userId={userId} />
            <Score userId={userId} />
          </div>
        </div>
        <KeyData userId={userId} />
      </section>
    </section>
  );
}

export default Dashboard;
