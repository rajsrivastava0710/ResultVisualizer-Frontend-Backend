import { fontSize, fontStyle } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { login } from "../redux/userRedux";

const parentDiv = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%",
  height: "91%",
  background: "lavender",
};

const Error = () => {
  const nameRef = React.useRef();
  const rollNumberRef = React.useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      login({
        name: nameRef.current.value,
        rollNumber: rollNumberRef.current.value,
      })
    );
    navigate("/students");
  };
  return (
    <div style={parentDiv}>
      <div className="welcome-text">Welcome to KNIT Result Visualizer !!</div>
      <div className="rest-landing-area">
        <div style={{ fontSize: "1.4rem", paddingBottom: "10px" }}>
          Please enter your details here !!
        </div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            inputRef={nameRef}
          />
          <TextField
            id="outlined-number"
            label="Roll No"
            type="number"
            inputRef={rollNumberRef}
          />
        </Box>
        <div style={{ paddingTop: "10px" }}>
          <Button variant="contained" color="primary" onClick={handleClick}>
            {/* <Link to="/students" style={{ color: "white" }}>
              Enter
            </Link> */}
            Enter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Error;
