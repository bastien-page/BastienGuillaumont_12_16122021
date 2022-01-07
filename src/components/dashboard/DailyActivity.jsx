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

/**
 * Create BarChart component
 * @param {string} User Id
 * @returns {React Component }
 */
function DailyActivity({ activity }) {
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

  return (
    <div className="dailyactivity">
      <p className="dailyactivity__title">Activité quotidienne</p>
      <BarChart
        width={800}
        height={300}
        data={activity}
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
          padding={{ left: -48, right: -48 }}
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
          domain={["dataMin-2"]}
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
            fillOpacity: "0.4",
            strokeWidth: 10,
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

/**
 *
 */
DailyActivity.propTypes = {
  activity: PropTypes.array,
};

export default DailyActivity;
