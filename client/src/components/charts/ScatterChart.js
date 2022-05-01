import { Chart } from "react-google-charts";
import Paper from "@mui/material/Paper";
import ChartTitle from "../ChartTitle"

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
    <Paper elevation={5} sx = {{width: '90%', margin: 'auto', marginBottom: '20px'}}>
      <ChartTitle title = "Distribution of Roll Number and Percentage" ></ChartTitle>
      <Chart
        chartType="ScatterChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </Paper>
  );
};

export default ScatterChart;
