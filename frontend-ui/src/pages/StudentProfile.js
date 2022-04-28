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
  return (
    <div style={{ display: "flex", padding: "0px 100px" }}>
      <Paper elevation={4} sx={{ width: "65%", height: 600, margin: "20px" }}>
        <HistogramChart tableData={data}></HistogramChart>
      </Paper>
      <Paper
        elevation={4}
        sx={{
          width: "35%",
          height: 600,
          margin: "20px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          paddingLeft: 5,
        }}
      >
        <Grid container sx={{ margin: "auto", justifyContent: "space-around" }}>
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
                  <span style={{ fontSize: 20 }}>Tejaswi Verma(16252)</span>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item spacing={5} sx={{ padding: 2 }}>
              <Grid item xs={4}>
                <b>Username:</b>
              </Grid>
              <Grid item>Tejaswi Verma</Grid>
            </Grid>

            <Grid container item spacing={5} sx={{ padding: 2 }}>
              <Grid item xs={4}>
                <b>Father's Name</b>
              </Grid>
              <Grid item>Devendra Singh</Grid>
            </Grid>
            <Divider />

            <Grid container item spacing={5} sx={{ padding: 2 }}>
              <Grid item xs={4}>
                <b>Roll No.:</b>
              </Grid>
              <Grid item xs={4}>
                16252
              </Grid>
              <Divider />
            </Grid>

            <Grid container item spacing={5} sx={{ padding: 2 }}>
              <Grid item xs={4}>
                <b>Course:</b>
              </Grid>
              <Grid item xs={4}>
                Btech
              </Grid>
            </Grid>
            <Divider />

            <Grid container item spacing={5} sx={{ padding: 2 }}>
              <Grid item xs={4}>
                <b>Branch:</b>
              </Grid>
              <Grid item xs={4}>
                Computer Science and Engineering
              </Grid>
            </Grid>
            <Divider />

            <Grid container item spacing={5} sx={{ padding: 2 }}>
              <Grid item xs={4}>
                <b>Percent:</b>
              </Grid>
              <Grid item xs={4}>
                75.2
              </Grid>
            </Grid>

            <Grid container item spacing={5} sx={{ padding: 2 }}>
              <Grid item xs={4}>
                <b>Total Marks:</b>
              </Grid>
              <Grid item xs={4}>
                4790
              </Grid>
            </Grid>

            <Grid container item spacing={5} sx={{ padding: 2 }}>
              <Grid item xs={4}>
                <b>Division:</b>
              </Grid>
              <Grid item xs={4}>
                Div I
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
