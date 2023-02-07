import { MoviesList, Navbar } from "../src/components";
import { Box } from "@mui/material";
import { createTheme, colors, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    secondary: {
      main: colors.orange[500],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            width: "20%",
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          }}
        >
          <Navbar />
        </Box>

        <Box
          sx={{
            width: "80%",
            [theme.breakpoints.down("md")]: {
              width: "100%",
            },
          }}
        >
          <MoviesList />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
