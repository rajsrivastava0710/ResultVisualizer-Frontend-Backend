import useHttp from "../custom_hooks/useHttp";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../constants";
import ScatterChart from "../components/charts/ScatterChart";
import HistogramChart from "../components/charts/HistogramChart";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ChartsVisualization = () => {
  const handleChange = (event) => {
    setBranch(event.target.value);
  };

  const { isLoading, error, sendRequest } = useHttp();
  const [branch, setBranch] = useState("Civil");
  const [table1Data, setTable1Data] = useState();

  useEffect(() => {
    sendRequest(
      {
        url: `${BASE_URL}/student?branch=${branch}`,
      },
      setTable1Data
    );
  }, [branch]);
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Branch</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={branch}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="Civil">Civil</MenuItem>
          <MenuItem value="Computer Science">Computer Science</MenuItem>
          <MenuItem value="Electrical">Electrical</MenuItem>
        </Select>
      </FormControl>
      {table1Data && <ScatterChart tableData={table1Data} />}
      {table1Data && <HistogramChart tableData={table1Data} />}
    </div>
  );
};

export default ChartsVisualization;
