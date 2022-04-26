import StickyHeadTable from "../components/StickyHeadTable";
import useHttp from "../custom_hooks/useHttp";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../constants";

const Home = () => {
  const { isLoading, error, sendRequest } = useHttp();
  const [queryParam, setQueryParam] = useState();
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
      <h1>Hello world</h1>
      {table1Data && (
        <StickyHeadTable
          tableData={table1Data}
          setBranch={setQueryParam}
          branch={queryParam}
        />
      )}
    </div>
  );
};

export default Home;
