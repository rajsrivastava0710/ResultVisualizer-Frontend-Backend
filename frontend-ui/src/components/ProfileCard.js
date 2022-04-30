import { Chip, Fab, Grid, Paper } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styled from "styled-components";
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { BarChart } from "./charts/BarChart";
import { BarChartData, lineChartData } from "../util/convertData";
import { useLocation } from "react-router-dom";
import { StackedBarChart } from "./charts/StackedBarChart";

const SocialContainer = styled.div`
  display: flex;
  margin: 20px;
  width: 60%;
  justify-content: space-between;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Span = styled.span`
  margin-top: 10px;
`;

const ProfileCard = () => {
  const location = useLocation();
  const studentData = location.state;
  return (
    <Grid container sx={{ padding: 8 }}>
      <Grid container item spacing={5} sx={{ marginBottom: 6 }}>
        {/* <Grid xs={1}></Grid> */}
        <Grid item xs={4}>
          <Paper
            elevation={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              height: "400px",
            }}
          >
            <AccountCircleIcon sx={{ fontSize: 100 }} />
            <h2 style={{ marginBottom: 2 }}>TEJASWI VERMA - 16252</h2>
            <h4 style={{ marginBottom: 20 }}>
              Computer Science and Engineering
            </h4>
            <Chip
              label="Div I "
              color="primary"
              size="large"
              sx={{ width: "30%", fontSize: "1rem" }}
            />
            <Span>Total Marks : 3690</Span>
            <Span>Percentage : 76.2</Span>
            <SocialContainer>
              <SocialIcon color="3B5999">
                <Facebook />
              </SocialIcon>
              <SocialIcon color="E4405F">
                <GitHub />
              </SocialIcon>
              <SocialIcon color="55ACEE">
                <LinkedIn />
              </SocialIcon>
            </SocialContainer>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper sx={{ height: "400px" }} elevation={5}>
            <BarChart data={lineChartData(studentData)}></BarChart>
          </Paper>
        </Grid>
      </Grid>
      <Grid container item>
        <Grid item xs={12}>
          <Paper sx={{ padding: 10 }} elevation={5}>
            <StackedBarChart data={BarChartData(studentData)} />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileCard;
