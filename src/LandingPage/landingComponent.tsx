import { Box, Typography, useTheme } from "@mui/material";
import Me from "../assets/Me.svg";
import Arrow from "../assets/Arrow.svg";

import { css } from "@emotion/react";

const avtarBoxStyle = css({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "230px",
  height: "230px",
  background:
    "radial-gradient(circle, rgba(64, 0, 128, 1) 0%, rgba(0, 0, 0, 1) 100%)",
  borderRadius: "50%",
  marginTop: "100px",
});

const arrowStyle = css({
  position: "absolute",
  top: "-97px",
  right: "-54px",
});

const coverContainer = css({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50px",
  backgroundColor: "#1a1124",
});

function LandingComponent() {
  const theme = useTheme();

  return (
    <>
      <Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"28px"}
          sx={{ height: "95vh" }}
        >
          <Box sx={avtarBoxStyle}>
            <img className="avtarStyle" src={Me} />
            <Box sx={arrowStyle}>
              <img className="avtarStyle" src={Arrow} />
            </Box>
          </Box>
          <Box
            sx={{
              paddingTop: "10px",
            }}
          >
            <Box display={"inline-flex"}
            paddingRight={"110px"}>
            <Typography
              sx={{ color: theme.palette.text.primary }}
              className="preahvihear-regular typewriter"
            >
              Hello! I Am{" "}
              <span
                style={{ color: "#7127BA" }}
                className="preahvihear-regular"
              >
                Prasad Jagtap
              </span>
            </Typography>
            </Box>
            <Typography
              sx={{
                color: theme.palette.text.primary,
                marginTop: "84px",
                textAlign: "start",
              }}
              className="preahvihear-regular"
            >
              A Developer who
              <br />
              <span
                style={{
                  fontSize: "2rem",
                }}
                className="preahvihear-regular"
              >
                Unleash the Creative <br /> Designs on every{" "}
                <Box sx={coverContainer}>
                  <span className="cover-text">Click</span>
                </Box>
                ...
              </span><br/>
              <span style={{fontSize:"12px"}}>Bridging the Gap Between Imagination and Reality</span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default LandingComponent;
