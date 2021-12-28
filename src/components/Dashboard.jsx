import React from "react";

import DailyActivity from "./dashboard/DailyActivity";
import Hello from "./dashboard/Hello";
import KeyData from "./dashboard/KeyData";
import Radar from "./dashboard/Radar";
import Score from "./dashboard/Score";
import Session from "./dashboard/Session";

function Dashboard() {
  return (
    <section className="dashboard">
      <Hello />
      <section className="dashboard__charts">
        <div className="dashboard__charts-left">
          <DailyActivity />
          <div className="dashboard__charts-bottom">
            <Session />
            {/* <Radar /> */}
            <Score />
          </div>
        </div>
        <KeyData />
      </section>
    </section>
  );
}

export default Dashboard;
