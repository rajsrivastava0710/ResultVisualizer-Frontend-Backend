import { Chart } from "react-google-charts";
import Paper from "@mui/material/Paper";
import ChartTitle from "../ChartTitle"

const options = {
  //   title:
  //     "Fertility rate vs life expectancy in selected countries (2010)." +
  //     " X=Life Expectancy, Y=Fertility, Bubble size=Population, Bubble color=Region",
  hAxis: { title: "Average Percentage of branch" },
  vAxis: {
    title: "Number of students passed",
    viewWindow: {

      min: 5,
      max: 100,

    },
  },
  bubble: { textStyle: { fontSize: 11 } },
  height: "600px",
};

const BubbleChart = ({ tableData }) => {
  const data = [...tableData];
  return (
    <Paper sx = {{width: '90%', margin: 'auto', marginBottom: '20px'}}>
    <ChartTitle title = "Comparison of all branches" ></ChartTitle>
      <Chart
        chartType="BubbleChart"
        width="100%"
        height="500px"
        data={data}
        options={options}
      />
    </Paper>
  );
};

export default BubbleChart;
