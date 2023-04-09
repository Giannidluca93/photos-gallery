import { createTheme } from "@mui/material";

export const MainTheme = createTheme({
  palette: {
    mode: "light",
  },
  components: {
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
