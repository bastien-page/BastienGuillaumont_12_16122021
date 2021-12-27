import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  LineChart,
  CartesianGrid,
  Legend,
  Line,
} from "recharts";

function Session() {
  const data = [
    {
      name: "L",
      uv: 4000,
    },
    {
      name: "M",
      uv: 3000,
    },
    {
      name: "M",
      uv: 2000,
    },
    {
      name: "J",
      uv: 2780,
    },
    {
      name: "V",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "S",
      uv: 2390,
    },
    {
      name: "D",
      uv: 3490,
    },
  ];

  return (
    <div className="session">
      <p className="session__title">
        Durée moyenne <br />
        des sessions
      </p>
      <AreaChart
        width={260}
        height={260}
        data={data}
        className="session__graph"
        style={{
          background: "#FF0000",
          borderRadius: "5px",
        }}
        margin={{ top: 50, left: 0, right: 0, bottom: 10 }}
      >
        <defs>
          <linearGradient id="colorGraph" x1="0" y1="0" x2="1" y2="0">
            <stop offset="5%" stopColor="white" stopOpacity={0.6} />
            <stop offset="90%" stopColor="white" stopOpacity={1} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "white", opacity: "0.5" }}
          padding={{ left: 20, right: 20 }}
        />
        <YAxis hide={true} />
        <Tooltip content={<CustomTooltip />} />

        <Area
          type="monotone"
          dataKey="uv"
          stroke="url(#colorGraph)"
          fillOpacity={0.9}
          fill="#ff0101"
        />
      </AreaChart>

      {/* <LineChart
        width={260}
        height={260}
        data={data}
        margin={{ top: 50, right: 0, left: 0, bottom: 5 }}
        padding={{ top: 5, right: 5, left: 5, bottom: 5 }}
      >
        <defs>
          <linearGradient id="colorGraph" x1="0" y1="0" x2="1" y2="0">
            <stop offset="5%" stopColor="white" stopOpacity={0.6} />
            <stop offset="90%" stopColor="white" stopOpacity={1} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "white", opacity: "0.5" }}
          padding={{ left: 10, right: 10 }}
        />
        <YAxis hide={true} />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="uv"
          padding={{ left: -10, right: -10 }}
          stroke="url(#colorGraph)"
          fillOpacity={0.9}
          dot={false}
          activeDot={{
            stroke: "white",
            strokeOpacity: 0.2,
            fill: "white",
            strokeWidth: 10,
            r: 5,
          }}
          strokeWidth={2}
        />
      </LineChart> */}
    </div>
  );
}

export default Session;

/**
 * Customized Tooltip
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="session__tooltip">
        <p className="session__tooltip-item">{payload[0].value} min </p>
      </div>
    );
  }

  return null;
};
