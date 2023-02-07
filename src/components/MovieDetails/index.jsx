import { Box, Typography, Stack } from "@mui/material";
import { COLORS } from "../../constants";

const MovieDetails = () => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.BLUE[100],
      }}
    >
      <Stack>
        <img
          src="https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg"
          height="100%"
          alt="movie-poster"
        />
        <Box>
          <Typography>Free Guy</Typography>
        </Box>
      </Stack>
    </Box>
  );
};
export default MovieDetails;
