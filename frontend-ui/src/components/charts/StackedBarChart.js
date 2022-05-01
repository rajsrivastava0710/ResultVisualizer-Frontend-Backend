import React from "react";
import { Chart } from "react-google-charts";
import ChartTitle from "../ChartTitle";
import Paper from "@mui/material/Paper";

// export const data = [
//   ["City", "2010 Population", "2000 Population"],
//   ["New York City, NY", 8175000, 8008000],
//   ["Los Angeles, CA", 3792000, 3694000],
//   ["Chicago, IL", 2695000, 2896000],
//   ["Houston, TX", 2099000, 1953000],
//   ["Philadelphia, PA", 1526000, 1517000],
// ];

export const options = {
  chart: {
    // title: " ",
    // subtitle: " ",
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
      5: { side: "right" },
    },
  },
};

export function StackedBarChart({ data }) {
  return (
    // <Paper elevation={5} sx = {{width: '90%', margin: 'auto', marginBottom: '20px'}}>
      // <ChartTitle title = "Student's percentage year wise"></ChartTitle>
      <Chart
        chartType="Bar"
        width="100%"
        height="250px"
        data={data}
        options={options}
      />
    // </Paper>
  );
}
