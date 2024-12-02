import { useContext, useMemo, useRef } from "react";
import { ThemeContext } from "../ThemeContextProvider";
import {
  AppBar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import LandingComponent from "../LandingPage/landingComponent";
import AboutComponent from "../AboutComponent/aboutComponent";
import ExperienceComponent from "../ExperienceComponent/experienceComponent";

function HomeComponent() {
  const theme = useTheme();
  const Home = useRef<HTMLDivElement>(null);
  const About = useRef<HTMLDivElement>(null);
  const Contact = useRef<HTMLDivElement>(null);

  const { switchColorMode } = useContext(ThemeContext);
  const navItems = ["Home", "About", "Contact"];
  const sectionRefs = { Home, About, Contact };

  const activateName = useMemo(
    () => (theme.palette.mode === "dark" ? "Light" : "Dark"),
    [theme]
  );

  const switchTab = (item: string) => {
    const selectedRef = sectionRefs[item as keyof typeof sectionRefs];
    if (selectedRef && selectedRef.current) {
      selectedRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };  

  return (
    <>
      <Box
        sx={{
          padding: "0px !important",
        }}
      >
        <AppBar
        //   position="static"
          sx={{
            padding: "0px !important",
            bgcolor: theme.palette.background.paper,
            position: "sticky",
            top: "0",
            overflow: "hidden"
          }}
        >
          <Toolbar>
            <Box flex={1}>
              {/* <AdbIcon
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  color: theme.palette.mode === "dark" ? "white" : "#1A0B2E",
                }}
              /> */}
              <Typography  sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  fontSize:"1.5rem",
                  color: theme.palette.mode === "dark" ? "white" : "#1A0B2E",
                }} className="preahvihear-regular">PJ</Typography>
            </Box>
            <Box display={"flex"} flexDirection={"row"}>
              <List sx={{ display: "flex", flexDirection: "row" }}>
                {navItems.map((item) => (
                  <ListItem key={item} disablePadding>
                    <ListItemButton
                      sx={{
                        textAlign: "center",
                        color: theme.palette.text.primary,
                      }}
                      onClick={() => switchTab(item)}
                    >
                      <ListItemText primary={item} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Box display={"flex"} alignItems={"center"}>
                <Tooltip title={`Activate ${activateName} Mode`}>
                  <IconButton
                    onClick={switchColorMode}
                    sx={{
                      p: 1,
                    //   border: `1px ${theme.palette.text.primary} solid`,
                    }}
                    size="large"
                    color="inherit"
                  >
                    {theme.palette.mode === "dark" ? (
                      <LightModeOutlined />
                    ) : (
                      <DarkModeOutlined color="action" />
                    )}
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <Box sx={{ background: "#11071f" }}>
          <Box ref={Home} height={"80vh"}>
            <LandingComponent />
          </Box>
          <Box ref={About} height={"80vh"}>
            <AboutComponent/>
          </Box>
          <Box ref={Contact} height={"80vh"}>
            <ExperienceComponent/>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default HomeComponent;
