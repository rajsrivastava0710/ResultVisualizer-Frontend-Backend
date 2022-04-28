import { Chart } from "react-google-charts";

const options = {
  //   title:
  //     "Fertility rate vs life expectancy in selected countries (2010)." +
  //     " X=Life Expectancy, Y=Fertility, Bubble size=Population, Bubble color=Region",
  hAxis: { title: "Average Percentage" },
  vAxis: {
    title: "Number of students passed",
    viewWindow: {
      min: 5,
      max: 15,
    },
  },
  bubble: { textStyle: { fontSize: 11 } },
  height: "600px",
};

const BubbleChart = ({ tableData }) => {
  const data = [...tableData];
  return (
    <div>
      <Chart
        chartType="BubbleChart"
        width="100%"
        height="500px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default BubbleChart;
