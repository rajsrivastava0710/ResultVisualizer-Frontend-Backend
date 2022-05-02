import { Chart } from "react-google-charts";
import Paper from "@mui/material/Paper";
import ChartTitle from "../ChartTitle"

const options = {
  // title: "Marks Distribution Among Students",
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
    <Paper sx = {{width: '90%', margin: 'auto', marginBottom: '20px'}}>
      <ChartTitle title = "Marks distribution among students" ></ChartTitle>
      <Chart
      chartType="Histogram"
      width="100%"
      height="400px"
      data={data}
      options={options}
      />
    </Paper>
  );
};

export default HistogramChart;
