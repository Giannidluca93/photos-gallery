import { createTheme } from "@mui/material";

export const MainTheme = createTheme({
  palette: {
    mode: "light",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          minHeight: "100%",
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
        color: "text.secondary",
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
  },
});
