import { Chart } from "react-google-charts";

import React from "react";
import { Chart } from "react-google-charts";

export const data_ = [
  [
    "Branch",
    "Average Percent",
    "Students Passed",
    "Branch Roll Number Range",
    "Total Students"
  ],
  [
    "Civil Engineering",
    76.11466666666668,
    60,
    "16101-16162",
    60
  ],
  [
    "Computer Science Engineering",
    74.82,
    53,
    "16201-16258",
    53
  ],
  [
    "Electrical Engineering",
    70.84344827586204,
    58,
    "16301-16363",
    58
  ],
  [
    "Electronics Engineering",
    71.61666666666667,
    53,
    "16401-16460",
    54
  ],
  [
    "Mechanical Engineering",
    73.27157894736843,
    55,
    "16501-16560",
    57
  ],
  [
    "Information Technology",
    76.60036363636367,
    55,
    "16601-16656",
    55
  ]
];

export const options_ = {
  colorAxis: { colors: ["yellow", "red","blue","green","orange",
"grey"] },
  title:
    "Correlation between branches and their average percentage",
  hAxis: { title: "Average Branch Percentage" },
  vAxis: { title: "Number of students passed" },
  bubble: { textStyle: { fontSize: 11 } },
};

export function App() {
  return (
    <Chart
      chartType="BubbleChart"
      width="100%"
      height="400px"
      data={data_}
      options={options_}
    />
  );
}



export const data = [
  ["Student", "Percent"],
  ["16212", 76],
  ["16221", 66],
  ["16238", 86],
  ["16243", 73],
  ["16255", 62],
];
export const options = {
  hAxis: {
    title: "Roll Number",
  },
  vAxis: {
    title: "Percentage",
  },
  // series: {
  //   1: { curveType: "function" },
  // },
};

export const data2 = [
  ["Student", "Percent"],
  ["Raj - 16243", 76],
  ["Shiv - 16223", 66],
  ["TV - 16443", 56],
  ["Karan - 16253", 46],
  ["Vedas - 16241", 73],
  ["MK - 16233", 79],
  ["Vidush - 16254", 82],
  ["Hari - 16242", 88],
  ["Pranav - 16260", 63],
  ["Abhi - 16213", 67],
];

export const options2 = {
  title: "Marks Distribution Among Students",
  hAxis: {
    title: "Marks",
  },
  vAxis: {
    title: "Number of Students",
  },
  legend: { position: "none" },
  colors: ["orange"],
};

const Error = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <Chart
        chartType="ScatterChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />

      <Chart
        chartType="Histogram"
        width="100%"
        height="400px"
        data={data2}
        options={options2}
      />
    </div>
  );
};

export default Error;
