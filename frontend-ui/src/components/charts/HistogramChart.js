import { Chart } from "react-google-charts";

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

const options = {
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
const HistogramChart = ({ tableData }) => {
  const data = [["Student", "Percentage"]];
  tableData.forEach((row) => {
    data.push([`${row.name} - ${row.rollNumber}`, +row.percent]);
  });
  return (
    <div>
      <Chart
        chartType="Histogram"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default HistogramChart;
