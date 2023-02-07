import "./App.css";
import { MoviesList, Navbar } from "../src/components";
import { Grid, Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        height: "100%",
      }}
    >
      <Grid container>
        <Grid item xs={3} lg={3}>
          <Navbar />
        </Grid>
        <Grid item xs={9} lg={9}>
          <MoviesList />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
