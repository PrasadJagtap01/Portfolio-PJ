import {
    StyledEngineProvider,
    ThemeProvider,
    createTheme,
  } from "@mui/material/styles";
  import { ReactNode, createContext, useMemo, useState } from "react";
  
  type ThemeContextType = {
    switchColorMode: () => void;
  };
  
  type ThemeProviderProps = {
    children: ReactNode;
  };
  
  export const ThemeContext = createContext<ThemeContextType>({
    switchColorMode: () => {

    },
  });
  
  export function ThemeContextProvider({ children }: ThemeProviderProps) {
    const [mode, setMode] = useState<"light" | "dark">("dark");
  
    const switchColorMode = () => {
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };
  
    const theme = useMemo(
      () =>
        createTheme({
          palette: {
          mode,
          ...(mode === "light"
            ? {
                // Light mode palette
                primary: {
                  main: "#1976d2",
                },
                background: {
                  default: "#f5f5f5",
                  paper: "#ffffff",
                },
                text: {
                  primary: "#000000",
                  secondary: "#555555",
                },
              }
            : {
                // Dark mode palette
                primary: {
                    main: '#ff5252',
                },
                background: {
                  default: "#121212",
                  paper: "#1A0B2E",
                },
                text: {
                  primary: "#ffffff",
                  secondary: "#bbbbbb",
                },
              }),
        },
        typography: {
          fontFamily: "Preahvihear, sans-serif",
          body1: {
            fontSize: "1rem",
            color:"#ffffff"
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none", // Example of custom button styling
              },
            },
          },
        },
        }),
      [mode]
    );
  
    return (
      <StyledEngineProvider injectFirst>
        <ThemeContext.Provider value={{ switchColorMode }}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
      </StyledEngineProvider>
    );
  }