import useHttp from "../custom_hooks/useHttp";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../constants";
import BubbleChart from "../components/charts/BubbleChart";
import PageTitle from "../components/PageTitle";

const BubbleChartVisualisation = () => {

  const {
    isLoading: isLoading3,
    error: error3,
    sendRequest: sendRequest3,
  } = useHttp();

  const [table3Data, setTable3Data] = useState();

  useEffect(() => {
    sendRequest3(
      {
        url: `${BASE_URL}/visualise/branchBubble`,
      },
      setTable3Data
    );
  }, []);

  return (
    <div>
      <div className = "chart-page-title-filter">
        <PageTitle title = {"Graphical Visualisation of all branches "}></PageTitle> 
      </div>
      
      {table3Data && <BubbleChart tableData={table3Data} />}

    </div>
  );
};

export default BubbleChartVisualisation
