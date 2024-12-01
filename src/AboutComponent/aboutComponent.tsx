import { Box, Typography, useTheme } from "@mui/material";

function AboutComponent() {
  const theme = useTheme();
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"start"}
        alignItems={"flex-start"}
        flexDirection={"column"}
        marginLeft={"200px"}
      >
        <Box>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: "2rem",
              textAlign:"start"
            }}
            className="preahvihear-regular"
          >
            I'm a Software Engineer
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: "0.8rem",
              textAlign:"start"

            }}
            className="preahvihear-regular"
          >
            Currently, I'm a Software Engineer at{" "}
            <span style={{ color: "#7127BA" }} className="preahvihear-regular">
              Thinkitive Technologies
            </span>
          </Typography>
          <Typography
          sx={{
            color: theme.palette.text.primary,
            marginTop: "40px",
            textAlign: "start",
          }}
          className="preahvihear-regular"
        >
          A react developer with two years of professional experience
          specializing in web development,
          <br />
          project management, Agile methodology, and quality assurance testing.
          Adept at coordinating <br />
          effectively with development teams, clients, and non-technical
          stakeholders to execute complex <br />
          web development projects.
        </Typography>
        </Box>
      </Box>
      
    </>
  );
}

export default AboutComponent;
