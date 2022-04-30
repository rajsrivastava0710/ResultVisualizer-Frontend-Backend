import { Chip, Fab, Grid, Paper } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styled from "styled-components";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
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
    <Grid container>
      <Grid container item spacing={4}>
        {/* <Grid xs={4}></Grid> */}
        <Grid item xs={3}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <AccountCircleIcon sx={{ fontSize: 100 }} />
            <h2 style={{ marginBottom: 2 }}>TEJASWI VERMA - 16252</h2>
            <h4 style={{ marginBottom: 20 }}>
              Computer Science and Engineering
            </h4>
            <Chip
              label="Division I"
              color="primary"
              size="large"
              sx={{ width: "30%", fontSize: "1.2rem" }}
            />
            <Span>Total Marks : 3690</Span>
            <Span>Percentage : 76.2</Span>
            <SocialContainer>
              <SocialIcon color="3B5999">
                <Facebook />
              </SocialIcon>
              <SocialIcon color="E4405F">
                <Instagram />
              </SocialIcon>
              <SocialIcon color="55ACEE">
                <Twitter />
              </SocialIcon>
            </SocialContainer>
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <BarChart data={lineChartData(studentData)}></BarChart>
        </Grid>
      </Grid>
      <Grid container item>
        <StackedBarChart data={BarChartData(studentData)} />
      </Grid>
    </Grid>
  );
};

export default ProfileCard;
