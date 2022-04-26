import { Chart } from "react-google-charts";

export const data = [
  ["Student", "Percent"],
  [16212, 76],
  [16221, 66],
  [16238, 86],
  [16243, 73],
  [16255, 62],

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
        chartType="LineChart"
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
