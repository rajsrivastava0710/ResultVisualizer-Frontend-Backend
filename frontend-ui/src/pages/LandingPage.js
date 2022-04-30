import { fontSize, fontStyle } from "@mui/system";
import { Link } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const parentDiv = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "89%",
    background: "lavender",
}

const Error = () => {
  return (
    <div style={parentDiv}>
        <div className="welcome-text">
            Welcome to KNIT Result Visualizer !!
        </div>
        <div className="rest-landing-area">
            <div style = {{fontSize: '1.4rem', paddingBottom: '10px'}}>
                Please enter your details here !!
            </div>
            <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <TextField
                    id="outlined-number"
                    label="Roll No"
                    type="number"
                />
            </Box>
            <div style = {{paddingTop: '10px'}}>
                <Button variant="contained" color="primary">
                    <Link to = "/students" style={{color: 'white'}}>Enter</Link>
                </Button>
            </div>
        </div>    
    </div>
  );
};

export default Error;
