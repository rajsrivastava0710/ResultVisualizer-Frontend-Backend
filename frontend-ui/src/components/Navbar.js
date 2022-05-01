import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useSelector } from "react-redux";

const pages = [
  ["Home", "students"],
  ["About", "about"],
  ["Contact Us", "contact"],
];

const options = ["Tabular Visualisation", "Graphical - Student Level", "Graphical - Branch Level"];

const NavBar = () => {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Grid disableGutters container item>
          <Grid item sx={{ alignItems: "center", display: "flex" }} xs={2}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              KNIT Result Visualizer
            </Typography>
          </Grid>
          <Grid xs={5}></Grid>

          <Grid
            item
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "flex-end",
            }}
            xs={4}
          >
            {pages.map((page) => (
              <Button
                key={page[0]}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  to={`/${page[1]}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {page[0]}
                </Link>
              </Button>
            ))}
            <Dropdown name="Visualise" options={options} />
          </Grid>

          <Grid
            item
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "flex-end",
            }}
            xs={1}
          >
            {user && user.name && user.rollNumber && (
              <Tooltip title="Open your student profile">
                <IconButton sx={{ p: 0 }}>
                  <Avatar>{user.name.charAt(0)}</Avatar>
                </IconButton>
              </Tooltip>
            )}
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};
export default NavBar;
