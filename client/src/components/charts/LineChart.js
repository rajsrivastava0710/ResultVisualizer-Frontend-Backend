import React from "react";
import { Chart } from "react-google-charts";

export const options = {
  chart: {
    title: "Student's percentage year wise",
    subtitle: "This graph shows percentage of a student year wise",
  },
  vAxis: {
    title: "Number of students passed",
    viewWindow: {
      min: 0,
      max: 100,
    },
    gridLines: {
      multiple: 1000,
    },
  },
};

// export const data = [
//     ["Day", "Guardians of the Galaxy"],
//     [1, 37.8],
//     [2, 30.9],
//     [3, 25.4],
//     [4, 11.7],
//     [5, 11.9],
//     [6, 8.8],
//     [7, 7.6],
//     [8, 12.3],
//     [9, 16.9],
//     [10, 12.8],
//     [11, 5.37],
//     [12, 6.6],
//     [13, 4.8],
//     [14, 4.2],
//   ];

export function LineChart({ data }) {
  console.log(data);
  return (
    <Chart
      chartType="Line"
      width="100%"
      height="600px"
      data={data}
      options={options}
    />
  );
}
