import {
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import { Box } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HistogramChart from "../components/charts/HistogramChart";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { BarChartData, lineChartData } from "../util/convertData";
import { LineChart } from "../components/charts/LineChart";
import { BarChart } from "../components/charts/BarChart";
import { StackedBarChart } from "../components/charts/StackedBarChart";

// const data = [
//   ["Student", "Percent"],
//   ["Raj - 16243", 76],
//   ["Shiv - 16223", 66],
//   ["TV - 16443", 56],
//   ["Karan - 16253", 46],
//   ["Vedas - 16241", 73],
//   ["MK - 16233", 79],
//   ["Vidush - 16254", 82],
//   ["Hari - 16242", 88],
//   ["Pranav - 16260", 63],
//   ["Abhi - 16213", 67],
// ];

const data = [
  {
    name: "Raj",
    rollNumber: "16243",
    percent: 76,
  },
  {
    name: "Shiv",
    rollNumber: "16223",
    percent: 66,
  },
  {
    name: "TV",
    rollNumber: "16443",
    percent: 56,
  },
  {
    name: "Karan",
    rollNumber: "16253",
    percent: 46,
  },
];

const StudentProfile = () => {
  const location = useLocation();
  const studentData = location.state;
  console.log(studentData);
  const navigate = useNavigate();
  if (!studentData) {
    return <Navigate to="/"></Navigate>;
  }
  // console.log(BarChartData(studentData));
  return (
    <div style={{ display: "flex", padding: "0px 20px" }}>
      <Paper elevation={4} sx={{ width: "65%", margin: "20px", padding: 2 }}>
        <BarChart data={lineChartData(studentData)}></BarChart>
        <StackedBarChart data={BarChartData(studentData)} />
      </Paper>
      <Paper
        elevation={4}
        sx={{
          width: "45%",
          margin: "20px",
          display: "flex",
          justifyContent: "flex-start",
          padding: 2,
        }}
      >
        <Grid container sx={{ justifyContent: "space-around" }}>
          <Grid container item>
            <Grid item>
              <Grid container>
                <Grid item>
                  <AccountBoxIcon sx={{ fontSize: 80 }} />
                </Grid>
                <Grid
                  item
                  sx={{
                    paddingBottom: 2,
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <span
                    style={{
                      fontSize: 20,
                      fontSize: "30px",
                      fontFamily: "sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {`${studentData.name}`}
                  </span>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              item
              spacing={5}
              sx={{ padding: 2, fontSize: "1.75rem" }}
            >
              <Grid item xs={4}>
                <b>Name :</b>
              </Grid>
              <Grid item xs={8}>
                {studentData.name}
              </Grid>
            </Grid>

            {/* <Grid
              container
              item
              spacing={5}
              sx={{ padding: 2, fontSize: "1.75rem" }}
            >
              <Grid item xs={5}>
                <b>Father's Name</b>
              </Grid>
              <Grid item>Devendra Singh</Grid>
            </Grid> */}
            <Divider />

            <Grid
              container
              item
              spacing={5}
              sx={{ padding: 2, fontSize: "1.75rem" }}
            >
              <Grid item xs={4}>
                <b>Roll No :</b>
              </Grid>
              <Grid item xs={4}>
                {studentData.rollNumber}
              </Grid>
              <Divider />
            </Grid>

            <Grid
              container
              item
              spacing={5}
              sx={{ padding: 2, fontSize: "1.75rem" }}
            >
              <Grid item xs={4}>
                <b>Course :</b>
              </Grid>
              <Grid item xs={4}>
                B.Tech
              </Grid>
            </Grid>
            <Divider />

            <Grid
              container
              item
              spacing={5}
              sx={{ padding: 2, fontSize: "1.75rem" }}
            >
              <Grid item xs={4}>
                <b>Branch :</b>
              </Grid>
              <Grid item xs={8}>
                {studentData.branch}
              </Grid>
            </Grid>
            <Divider />

            <Grid
              container
              item
              spacing={5}
              sx={{ padding: 2, fontSize: "1.75rem" }}
            >
              <Grid item xs={4}>
                <b>Percent :</b>
              </Grid>
              <Grid item xs={4}>
                {studentData.percent}
              </Grid>
            </Grid>

            <Grid
              container
              item
              spacing={5}
              sx={{ padding: 2, fontSize: "1.75rem" }}
            >
              <Grid item xs={4}>
                <b>Total Marks :</b>
              </Grid>
              <Grid item xs={6}>
                {studentData.totalMarks}
              </Grid>
            </Grid>

            <Grid
              container
              item
              spacing={5}
              sx={{ padding: 2, fontSize: "1.75rem" }}
            >
              <Grid item xs={4}>
                <b>Division :</b>
              </Grid>
              <Grid item xs={8}>
                {studentData.division}
              </Grid>
            </Grid>
            <Divider />
          </Grid>

          <Grid container item>
            <Grid item></Grid>
          </Grid>
        </Grid>
        <Divider />
      </Paper>
    </div>
  );
};

export default StudentProfile;
