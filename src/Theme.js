import React from "react";
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import App from "./pages/App";

function ThemeApp() {
  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#00FFDD",
      },
      secondary: {
        main: "#30B9EF",
      },
    },
    components: {
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: "#30B9EF",
          },
        }
      },
      MuiButton: {
        styleOverrides: {
          label: {
            color: "white",
            fontWeight: "600",
          },
          containedPrimary: {
            backgroundColor: "#fff45b",
            color: "#000",
            boxShadow:"0px 5px 5px 0px #ccc",
          },
          root: {
            '&.Mui-disabled': {
              backgroundColor: "#30B9EF",
              color: "#FFFFFF"
            }
          },
        }
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            "&$focused": {
              color: "#30B9EF",
              
            },
          },
        }
      },
      MuiInputLabel: {
        styleOverrides: {
          filled: {
            color: "#313131",
          },
        }
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            color: "#313131",
          },
        }
      },
      MuiFilledInput: {
        styleOverrides: {
          underline: {
            "&&&:before": {
              borderBottom: "none"
            },
            "&&:after": {
              borderBottom: "none"
            }
          },
          root: {
            backgroundColor: "white",
            boxShadow:"0px 5px 5px 0px #ccc",
            border:"1px solid #E9E7E7",
            "&:hover": {
              backgroundColor: "white",
            },
            "&$focused": {
              backgroundColor: "white",
            },
          },
          // formControl: {
          //   color: "red",
          // },
        },
      },
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default ThemeApp;
