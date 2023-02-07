import { Box, Typography, Stack, Grid } from "@mui/material";
import MovieInfo from "../MovieInfo";
import { COLORS } from "../../constants";
import { CustomizedContainedButton } from "../ContainedButton";
import { CustomizedOutlinedButton } from "../OutlinedButton";
import { BorderLinearProgress } from "../LinearProgressBar";
import { useEffect, useState } from "react";

const MovieDescription = ({ selectedMovieName, movieList }) => {
  const [selectedMovie, setSelectedMovie] = useState([]);
  useEffect(() => {
    let duplicateMovieList = [...movieList];
    let filteredMovieList =
      duplicateMovieList.filter((e) => e.Title === selectedMovieName) || [];
    console.log(filteredMovieList);
    setSelectedMovie(filteredMovieList);
  }, [movieList, selectedMovieName]);

  if (!selectedMovieName) {
    return null;
  }

  return (
    <Grid
      container
      sx={{
        backgroundColor: COLORS.BLUE[100],
        borderRadius: "11px",
        marginBottom: "26px",
      }}
    >
      <Grid item xs={6} lg={3}>
        <img
          src={selectedMovie[0]?.Poster}
          alt="movie-poster"
          style={{
            position: "relative",
          }}
        />
      </Grid>
      <Grid
        item
        xs={6}
        lg={6}
        sx={{
          marginLeft: "90px",
        }}
      >
        <Typography
          sx={{
            marginTop: "34px",
            marginBottom: "23px",
            color: COLORS.GREY[100],
            fontSize: "30px",
            fontWeight: 700,
          }}
        >
          {selectedMovie[0]?.Title}
        </Typography>

        <Box display="flex" alignItems="center">
          <Box width="30%" mr={1}>
            <BorderLinearProgress
              variant="determinate"
              value={selectedMovie[0]?.imdbRating * 10}
            />
          </Box>
          <Box minWidth={35}>
            <Typography sx={{ color: COLORS.WHITE, fontSize: "16px" }}>
              {selectedMovie[0]?.imdbRating}/10
            </Typography>
          </Box>
        </Box>

        <MovieInfo selectedMovie={selectedMovie[0]} />
        <Typography
          sx={{
            color: COLORS.GREY[100],
            marginTop: "24px",
            overflowWrap: "break-word",
            fontSize: "14px",
          }}
        >
          {selectedMovie[0]?.Plot}
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            marginTop: "24px",
            marginBottom: "20px",
          }}
        >
          <CustomizedContainedButton>Play Movie</CustomizedContainedButton>
          <CustomizedOutlinedButton>Watch Trailer</CustomizedOutlinedButton>
        </Stack>
      </Grid>
    </Grid>
  );
};
export default MovieDescription;
