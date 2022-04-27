import StickyHeadTable from "../components/StickyHeadTable";
import useHttp from "../custom_hooks/useHttp";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../constants";
import ScatterChart from "../components/charts/ScatterChart";
import HistogramChart from "../components/charts/HistogramChart";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Home = () => {
  const { isLoading, error, sendRequest } = useHttp();
  const [queryParam, setQueryParam] = useState("All");
  const [table1Data, setTable1Data] = useState();

  useEffect(() => {
    sendRequest(
      {
        url: `${BASE_URL}/student?branch=${queryParam}`,
      },
      setTable1Data
    );
  }, [queryParam]);
  return (
    <div>
      {table1Data && (
        <StickyHeadTable
          tableData={table1Data}
          setBranch={setQueryParam}
          branch={queryParam || "All"}
        />
      )}
    </div>
  );
};

export default Home;
