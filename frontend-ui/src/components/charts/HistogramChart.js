import { Chart } from "react-google-charts";

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
