import React from "react";
import { AreaChart, XAxis, YAxis, Tooltip, Area } from "recharts";
import PropTypes from "prop-types";

/**
 * Create AreaChart component
 * @param {string} User Id
 * @returns {React Component}
 */

function Session({ session }) {
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

  return (
    <div className="session">
      <p className="session__title">
        Durée moyenne <br />
        des sessions
      </p>
      <div className="session__axis">
        <p>L</p>
        <p>M</p>
        <p>M</p>
        <p>J</p>
        <p>V</p>
        <p>S</p>
        <p>D</p>
      </div>

      <AreaChart
        width={260}
        height={260}
        data={session}
        className="session__graph"
        style={{
          background: "#FF0000",
          borderRadius: "5px",
        }}
        margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorGraph" x1="0" y1="0" x2="1" y2="0">
            <stop offset="5%" stopColor="white" stopOpacity={0.6} />
            <stop offset="90%" stopColor="white" stopOpacity={1} />
          </linearGradient>
        </defs>
        <XAxis dataKey="day" hide={true} />
        <YAxis hide={true} padding={{ top: 80, bottom: 50 }} />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{
            stroke: "black",
            strokeOpacity: 0.05,
            strokeWidth: 40,
          }}
        />

        <Area
          type="monotone"
          dataKey="sessionLength"
          stroke="url(#colorGraph)"
          fillOpacity={0.9}
          fill="#ff0101"
        />
      </AreaChart>
    </div>
  );
}

Session.propTypes = {
  session: PropTypes.array.isRequired,
};

export default Session;
