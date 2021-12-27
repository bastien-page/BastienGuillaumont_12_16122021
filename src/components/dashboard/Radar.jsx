import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

function Radar() {
  const data = [
    {
      userId: 18,
      kind: {
        1: "cardio",
        2: "energy",
        3: "endurance",
        4: "strength",
        5: "speed",
        6: "intensity",
      },
      data: [
        {
          value: 200,
          kind: 1,
        },
        {
          value: 240,
          kind: 2,
        },
        {
          value: 80,
          kind: 3,
        },
        {
          value: 80,
          kind: 4,
        },
        {
          value: 220,
          kind: 5,
        },
        {
          value: 110,
          kind: 6,
        },
      ],
    },
  ];

  return (
    <RadarChart
      outerRadius={90}
      width={260}
      height={260}
      data={data[0].data}
      style={{
        background: "#282D30",
        borderRadius: "5px",
        margin: "2rem",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0212249)",
      }}
    >
      <PolarGrid radialLines={false} />
      <PolarAngleAxis dataKey="kind" stroke="white" tickLine={false} />
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

export default Radar;
