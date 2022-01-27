import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

import PropTypes from "prop-types";

function Score({ score }) {
  const userScore = score.score ? score.score * 100 : score.todayScore * 100;

  const data = [
    {
      score: userScore,
      fill: "#E60000",
    },
  ];

  return (
    <div className="score">
      <p className="score__title">Score</p>
      <div className="score__center">
        <p className="score__perf">
          <span>{userScore} %</span> <br />
          de votre <br />
          objectif
        </p>
      </div>
      <RadialBarChart
        width={260}
        height={260}
        innerRadius="60%"
        outerRadius="60%"
        data={data}
        startAngle={80}
        endAngle={950}
        barSize={10}
        className="score__position"
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar dataKey="score" cornerRadius="50%" />
      </RadialBarChart>
    </div>
  );
}
Score.propTypes = {
  userScore: PropTypes.object.isRequired,
};
export default Score;
