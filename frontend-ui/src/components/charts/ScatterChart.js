import { Chart } from "react-google-charts";

const options = {
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

const ScatterChart = ({ tableData }) => {
  const data = [["Student", "Percentage"]];
  tableData.forEach((row) => {
    data.push([row.rollNumber, +row.percent]);
  });
  return (
    <div>
      <Chart
        chartType="ScatterChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default ScatterChart;
