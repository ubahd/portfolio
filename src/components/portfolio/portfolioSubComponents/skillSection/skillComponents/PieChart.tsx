import React from "react";
import { Doughnut } from "react-chartjs-2";

interface PieChartProps {
  state: {};
  title: string;
}

const PieChart: React.FC<PieChartProps> = ({ state, title }) => {
  return (
    <Doughnut
      data={state}
      options={{
        title: {
          display: true,
          text: title,
          fontSize: 20,
          fontFamily: "'Abel', 'sans-serif'",
        },
        legend: {
          display: true,
          position: "right",
        },
        responsive: false,
      }}
    />
  );
};

export default PieChart;
