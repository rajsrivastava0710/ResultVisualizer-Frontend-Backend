import StickyHeadTable from "../components/StickyHeadTable";
import useHttp from "../custom_hooks/useHttp";
import React, { useState, useEffect } from "react";
import ScatterChart from "../components/charts/ScatterChart";
import HistogramChart from "../components/charts/HistogramChart";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/userRedux";
import { current } from "@reduxjs/toolkit";
import SpinnerLoader from "../components/spinnerLoader";

const Home = () => {
  const { isLoading, error, sendRequest } = useHttp();
  const [queryParam, setQueryParam] = useState("All");
  const [table1Data, setTable1Data] = useState();
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    sendRequest(
      {
        url: `/student?branch=${queryParam}`,
      },
      setTable1Data
    );
  }, [queryParam]);

  useEffect(() => {
    if (table1Data) {
      addRank(table1Data);
      const currentUser = table1Data.find((student) => {
        if (student && user) {
          return student.rollNumber === user.rollNumber;
        }
        return false;
      });
      dispatch(login(currentUser));
    }
  }, [table1Data]);

  const addRank = (data) => {
    data.sort(function (a, b) {
      if (isNaN(+a.percent)) {
        return 1;
      } else if (isNaN(+b.percent)) {
        return -1;
      } else {
        return a.percent - b.percent == 0
          ? a.rollNumber - b.rollNumber
          : b.percent - a.percent;
      }
    });
    data.forEach((value, index) => {
      value.rank = index + 1;
    });

    // data.sort(function (a, b) {
    //   return a.rollNumber - b.rollNumber;
    // });
  };
  const Container = styled.div`
    padding: 30px;
  `;
  return (
    <Container>
      {!table1Data && (
        <SpinnerLoader message = {"Fetching Student's data..."}></SpinnerLoader>
      )
      }
      {table1Data && (
        <StickyHeadTable
          tableData={table1Data}
          setBranch={setQueryParam}
          branch={queryParam || "All"}
        />
      )}
    </Container>
  );
};

export default Home;
