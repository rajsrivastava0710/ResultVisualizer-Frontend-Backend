import { Chart } from "react-google-charts";

const options = {
  title: "Students under each division",
  is3D: true,
};

const PieChart = ({ tableData }) => {
  return (
    <div>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={tableData}
        options={options}
      />
    </div>
  );
};

export default PieChart;
