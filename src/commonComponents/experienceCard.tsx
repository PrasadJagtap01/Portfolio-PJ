import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

interface experienceType {
  title?: string;
  logo: any;
  desc: string;
}

function ExperienceCard(params: experienceType) {
  const [hoverState, setHoverState] = useState(false);
  const { logo, title, desc } = params;

  const handleEnterState = () => {
    setHoverState(true);
  };

  const handleLeaveState = () => {
    setHoverState(false);
  };
  return (
    <>
    <Box
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        borderRadius={"20px"}
        padding={"20px 20px 10px 20px"}
        gap={"10px"}
        width={"35rem"}
        height={"126px"}
        sx={{
          background: "linear-gradient(188deg, #2b0e4d, #3d106c, #5a1494)",
        }} 
      >
        <Box>
          <img src={`${logo}`} alt="work logo" />
        </Box>
        <Box>
          <Typography>{title}</Typography>
          <Typography>{desc}</Typography>
          <Button
            onMouseEnter={handleEnterState}
            onMouseLeave={handleLeaveState}
          >
            Learn more
          </Button>
        </Box>
      </Box>
      {hoverState && (
        <Box>
          <Typography className="typewriter">{desc}</Typography>
        </Box>
      )}
      </Box>
    </>
  );
}
export default ExperienceCard;
