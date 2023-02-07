import { Box, Typography, Stack } from "@mui/material";
import MovieInfo from "../MovieInfo";
import { COLORS } from "../../constants";
import { CustomizedContainedButton } from "../ContainedButton";
import { CustomizedOutlinedButton } from "../OutlinedButton";
import { BorderLinearProgress } from "../LinearProgressBar";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const MovieDescription = ({ selectedMovieName, movieList }) => {
  const theme = useTheme();
  const isMdBreakpoint = useMediaQuery(
    `(max-width:${theme.breakpoints.values.sm}px)`
  );
  const [selectedMovie, setSelectedMovie] = useState([]);

  useEffect(() => {
    let duplicateMovieList = [...movieList];
    let filteredMovieList =
      duplicateMovieList.filter((e) => e.Title === selectedMovieName) || [];
    setSelectedMovie(filteredMovieList);
  }, [movieList, selectedMovieName]);

  if (!selectedMovieName) {
    return null;
  }

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "row",
        backgroundColor: COLORS.BLUE[100],
        borderRadius: "11px",
        marginBottom: "26px",
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
        },
      }}
    >
      <Box>
        <img
          src={selectedMovie[0]?.Poster}
          alt="movie-poster"
          width={!isMdBreakpoint ? 300 : 220}
          style={{
            position: "relative",
          }}
        />
      </Box>
      <Box sx={{ marginLeft: "35px" }}>
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
      </Box>
    </Box>
  );
};
export default MovieDescription;
