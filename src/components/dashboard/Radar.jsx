import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import PropTypes from "prop-types";
import { GetPerformance } from "../../services/getData";
import { useParams } from "react-router-dom";

function RadarUser() {
  const { id } = useParams();
  const userId = id;

  const data = GetPerformance(userId);

  const label = [
    "Intensité",
    "Vitesse",
    "Force",
    "Endurance",
    "Energie",
    "Cardio",
  ];

  // Customize tick
  function customTick(tick) {
    return label[tick - 1];
  }

  return (
    <RadarChart
      outerRadius={90}
      width={260}
      height={260}
      data={data}
      style={{
        background: "#282D30",
        borderRadius: "5px",
        margin: "2rem",
        marginBottom: "0",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0212249)",
      }}
    >
      <PolarGrid radialLines={false} />
      <PolarAngleAxis
        dataKey="kind"
        stroke="white"
        tickLine={false}
        tickFormatter={customTick}
        style={{ fontSize: "12px" }}
        dy={4}
      />
      <PolarRadiusAxis angle={"none"} dataKey="value" />
      <Radar
        dataKey="value"
        fill="#ff0101"
        fillOpacity={0.7}
        stroke="#ff0101"
      />
    </RadarChart>
  );
}

Radar.propTypes = {
  userId: PropTypes.string,
};

export default RadarUser;
