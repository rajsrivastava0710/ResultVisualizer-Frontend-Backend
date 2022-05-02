import { Chart } from "react-google-charts";
import Paper from "@mui/material/Paper";
import ChartTitle from "../ChartTitle"

const options = {
  // title: "Students under each division",
  is3D: true,
};

const PieChart = ({ tableData }) => {
  return (
    
    <Paper elevation={5} sx = {{width: '90%', margin: 'auto', marginBottom: '20px'} }>
      {/* <ChartTitle title = "Chart Name" ></ChartTitle> */}
      <ChartTitle title = "Students Count under each division"></ChartTitle>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={tableData}
        options={options}
      />
    </Paper>
  );
};

export default PieChart;
