import React, { useState, useEffect, useRef } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import useHttp from "../custom_hooks/useHttp";
import { BASE_URL } from "../constants";
import { Box } from "@mui/system";
import styled from "styled-components";
import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import TopperPanel from "./topperPanel";

const columns = [
  { id: "rollNumber", label: "Roll No.", minWidth: 170 },
  { id: "name", label: "Name", minWidth: 100 },
  { id: "totalMarks", label: "Total Marks", minWidth: 100 },
  { id: "percent", label: "Aggregate Percentage", minWidth: 100 },
  { id: "rank", label: "Rank", minWidth: 100 },
];

// const Select = styled.select`
//   padding: 10px;
//   margin: 20px;
// `;

const Option = styled.option``;

export default function StickyHeadTable({ tableData, setBranch, branch }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [data, setData] = useState(tableData);
  const [studentName, setStudentName] = useState("");
  const [sortBy, setSortBy] = useState("Roll Number");
  const inputElement = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    let tempData = tableData;

    if (sortBy === "Percentage") {
      tempData.sort(function (a, b) {
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
    } else {
      tempData.sort(function (a, b) {
        return a.rollNumber - b.rollNumber;
      });
    }

    if (inputElement.current.value) {
      tempData = tempData.filter(({ name, rollNumber }) => {
        if (isNaN(+inputElement.current.value)) {
          return name
            .toLowerCase()
            .includes(inputElement.current.value.toLowerCase());
        } else {
          return rollNumber.startsWith(inputElement.current.value);
        }
      });
    }
    setData([...tempData]);
  }, [studentName, tableData, sortBy]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangeSelect = (event) => {
    setBranch(event.target.value);
    setPage(0);
  };

  const handleInputChange = (event) => {
    setStudentName(event.target.value);
  };

  const handleSort = (event) => {
    setSortBy(event.target.value);
  };

  const handleClick = (studentsData) => {
    navigate(`/students/${studentsData.rollNumber}`, { state: studentsData });
  };

  return (
    <Box
      sx={{
        width: "80%",
        height: "80%",
        margin: "auto",
        backgroundColor: "primary.dark",
      }}
    >
      <TextField
        id="standard-basic"
        label="Search"
        variant="standard"
        onChange={handleInputChange}
        value={studentName}
        inputRef={inputElement}
      />

      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Branch</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={branch}
          label="Branch"
          onChange={handleChangeSelect}
        >
          <MenuItem value="All">ALL</MenuItem>
          <MenuItem value="Civil">Civil</MenuItem>
          <MenuItem value="Computer Science">Computer Science</MenuItem>
          <MenuItem value="Electrical">Electrical</MenuItem>
          <MenuItem value="Electronics">Electronics</MenuItem>
          <MenuItem value="Mechanical">Mechanical</MenuItem>
          <MenuItem value="Information Technology">Information Technology</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Sort By</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={sortBy}
          label="Sort By"
          onChange={handleSort}
        >
          <MenuItem value="Roll Number">Roll Number</MenuItem>
          <MenuItem value="Percentage">Percentage</MenuItem>
        </Select>
      </FormControl>

      <TopperPanel/>
      {
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row._id}
                        onClick={() => {
                          handleClick(row);
                        }}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      }
    </Box>
  );
}
