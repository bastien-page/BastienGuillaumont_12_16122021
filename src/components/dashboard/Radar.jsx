import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import PropTypes from "prop-types";

/**
 * Create Radar component
 * @param {string} User Id
 * @returns {React Component}
 */

function RadarUser({ performance }) {
  const userPerformance = performance;

  const label = [
    "Intensité",
    "Vitesse",
    "Force",
    "Endurance",
    "Energie",
    "Cardio",
  ];

  // Customize tick with Label
  function customTick(tick) {
    return label[tick - 1];
  }

  return (
    <RadarChart
      outerRadius={90}
      width={260}
      height={260}
      data={userPerformance}
      style={{
        background: "#282D30",
        borderRadius: "5px",
        margin: "2rem",
        marginBottom: "0",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0212249)",
      }}
    >
      <PolarGrid
        gridType="polygon"
        polarRadius={[20, 40, 60, 80]}
        radialLines={false}
      />
      <PolarAngleAxis
        dataKey="kind"
        stroke="white"
        tickLine={false}
        tickFormatter={customTick}
        style={{ fontSize: "12px" }}
        cy={3}
      />

      <Radar
        dataKey="value"
        fill="#ff0101"
        fillOpacity={0.7}
        stroke="#ff0101"
      />
    </RadarChart>
  );
}

RadarUser.propTypes = {
  userPerformance: PropTypes.array.isRequired,
};

export default RadarUser;
