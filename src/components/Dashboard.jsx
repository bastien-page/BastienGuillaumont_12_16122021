import React from "react";

import DailyActivity from "./dashboard/DailyActivity";
import Hello from "./dashboard/Hello";
import KeyData from "./dashboard/KeyData";
import RadarUser from "./dashboard/Radar";
import Score from "./dashboard/Score";
import Session from "./dashboard/Session";

import { useParams } from "react-router-dom";

import {
  GetName,
  GetActivityData,
  GetScore,
  GetKeyData,
  GetSessionData,
  GetPerformance,
} from "../services/getData";

/**
 * Create Dashboardcomponent
 * @returns {React Component}
 */

function Dashboard() {
  const { id } = useParams();
  const userId = id;

  const name = GetName(userId);
  const activity = GetActivityData(userId);
  const score = GetScore(userId);
  const keyData = GetKeyData(userId);
  const session = GetSessionData(userId);
  const performance = GetPerformance(userId);

  return (
    <section className="dashboard">
      <Hello name={name} />
      <section className="dashboard__charts">
        <div className="dashboard__charts-left">
          <DailyActivity activity={activity} />
          <div className="dashboard__charts-bottom">
            <Session session={session} />
            <RadarUser userId={userId} performance={performance} />
            <Score score={score} />
          </div>
        </div>
        <KeyData keyData={keyData} />
      </section>
    </section>
  );
}

export default Dashboard;
