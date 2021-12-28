import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import { GetScore } from "../../services/getData";
import { useParams } from "react-router-dom";

function Score() {
  const { id } = useParams();
  const userId = id;

  const score = GetScore(userId);

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
        <RadialBar dataKey="score" />
      </RadialBarChart>
    </div>
  );
}

export default Score;
