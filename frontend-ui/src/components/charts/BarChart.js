import React from "react";
import { Chart } from "react-google-charts";

// export const data = [
//   ["City", "2010 Population"],
//   ["New York City, NY", 8175000],
//   ["Los Angeles, CA", 3792000],
//   ["Chicago, IL", 2695000],
//   ["Houston, TX", 2099000],
//   ["Philadelphia, PA", 1526000],
// ];

export const options = {
  title: "Marks in each subject",
  chartArea: { width: "40%" },
  isStacked: true,
  hAxis: {
    title: "Marks Scored",
    minValue: 0,
  },
  vAxis: {
    title: "Year",
  },
};

export function BarChart({ data }) {
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
