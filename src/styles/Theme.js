import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    primary: { main: "#bfa46f" },
    background: { default: "#fff", paper: "#f5f5f5" },
    text: { primary: "#333" },
  },
  typography: {
    fontFamily: "Playfair Display, Montserrat, sans-serif",
  },
});
