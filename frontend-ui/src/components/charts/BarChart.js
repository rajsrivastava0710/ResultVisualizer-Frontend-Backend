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
  chart: {
    title: "Student's percentage year wise",
    subtitle: "This graph shows percentage of a student year wise",
  },
  hAxis: {
    title: "Year",
    minValue: 0,
  },
  vAxis: {
    title: "Percentage",
  },
  axes: {
    y: {
      0: { side: "right" },
    },
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
