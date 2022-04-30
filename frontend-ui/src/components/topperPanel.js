import SingleStudentTopper from "./singleStudentTopper";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState, useEffect } from "react";

const TopperPanel = ({ studentData }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const parentDiv = {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    margin: "auto",
    justifyContent: "space-around",
    flexWrap: "wrap",
    margin: "15px auto",
    marginBottom: "32px"
  };
  const singleStudent = {
    width: "200px",
    height: "200px",
    border: "2px solid black",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const crownStyle = {
    transform: "scale(5)",
    position: "relative",
    top: "-33px",
  };
  const topperText = {
    color: "rgb(53 56 228)",
    textAlign: "center",
    fontFamily: "monospace",
    fontSize: "2.7rem",
    fontWeight: "600",
    paddingBottom: "3px",
    width: "100%",
  };

  return (
    <div className="topperLayoutBox">
      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{ background: "powderblue" }}
          >
            <div style={topperText}>TOPPERS</div>
          </AccordionSummary>
          <AccordionDetails>
            <div style={parentDiv}>
              <div className="studentBlock">
                <div
                  style={singleStudent}
                  className="secondTopperColor toppers"
                >
                  {
                    <SingleStudentTopper
                      studentData={studentData[1]}
                      color={"#d0cecef0"}
                    ></SingleStudentTopper>
                  }
                </div>
              </div>

              <div className="studentBlock firstTopperPosition">
                <div style={crownStyle}>&#128081;</div>
                <div style={singleStudent} className="topperColor toppers">
                  {
                    <SingleStudentTopper
                      studentData={studentData[0]}
                      color={"#ecd6ab"}
                    ></SingleStudentTopper>
                  }
                </div>
              </div>

              <div className="studentBlock relativePosition">
                <div style={singleStudent} className="thirdTopperColor toppers">
                  {
                    <SingleStudentTopper
                      studentData={studentData[2]}
                      color={"#4d3535"}
                    ></SingleStudentTopper>
                  }
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default TopperPanel;
