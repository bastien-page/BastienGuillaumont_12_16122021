import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import PropTypes from "prop-types";

function DailyActivity() {
  const data = [
    {
      day: "2020-07-01",
      kilogram: 80,
      calories: 240,
    },
    {
      day: "2020-07-02",
      kilogram: 80,
      calories: 220,
    },
    {
      day: "2020-07-03",
      kilogram: 81,
      calories: 280,
    },
    {
      day: "2020-07-04",
      kilogram: 81,
      calories: 290,
    },
    {
      day: "2020-07-05",
      kilogram: 80,
      calories: 160,
    },
    {
      day: "2020-07-06",
      kilogram: 78,
      calories: 162,
    },
    {
      day: "2020-07-07",
      kilogram: 76,
      calories: 390,
    },
  ];

  return (
    <div className="dailyactivity">
      <p className="dailyactivity__title">Activité quotidienne</p>
      <BarChart
        width={800}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 10,
          bottom: 10,
        }}
        barGap={8}
      >
        <CartesianGrid strokeDasharray="1 1" vertical={false} />
        <XAxis
          tickFormatter={(tick) => `${tick + 1}`}
          tickLine={false}
          tick={{ fill: "#9B9EAC" }}
          tickMargin={10}
          axisLine={{ stroke: "#9B9EAC" }}
          padding={{ left: -52, right: -52 }}
        />
        <YAxis
          yAxisId="calories"
          dataKey="calories"
          hide={true}
          tickCount="3"
          orientation="left"
        />
        <YAxis
          yAxisId="kilogram"
          tickLine={false}
          axisLine={false}
          tick={{ fill: "#9B9EAC" }}
          tickMargin={25}
          orientation="right"
          dataKey="kilogram"
          tickCount="3"
        />

        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize="8"
          height={50}
          width={300}
        />
        <Tooltip
          position={{ y: 35 }}
          content={<CustomTooltip />}
          cursor={{
            fill: "#C4C4C4",
            fillOpacity: ".5",
          }}
        />
        <Bar
          yAxisId="kilogram"
          barSize={7}
          dataKey="kilogram"
          name="Poids (kg)"
          fill="#282D30"
          stackId="a"
          radius={[3, 3, 0, 0]}
          padding={{ left: 0 }}
        />
        <Bar
          yAxisId="calories"
          barSize={7}
          dataKey="calories"
          name="Calories brûlées (kCal)"
          fill="#E60000"
          stackId="b"
          radius={[3, 3, 0, 0]}
        />
      </BarChart>
    </div>
  );
}

export default DailyActivity;

/**
 * Customized Tooltip
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="dailyactivity__tooltip">
        <p className="dailyactivity__tooltip-item">{payload[0].value}kg</p>
        <p className="dailyactivity__tooltip-item">{payload[1].value}kCal</p>
      </div>
    );
  }

  return null;
};
