import { movieData } from "../../data/movieData";
import { Box, Grid } from "@mui/material";
import { MovieCard } from "../../components";
import { COLORS } from "../../constants";
import { SearchBar, MovieDescription } from "../../components";
import { useState } from "react";
import { useEffect } from "react";

const MoviesList = () => {
  const [movieList, setMovieList] = useState(movieData);
  const [filterText, setFilterText] = useState("");
  const [selectedMovieName, setSelectedMovieName] = useState("");

  useEffect(() => {
    if (!filterText) {
      return setMovieList(movieData);
    }
    let duplicateMovieList = [...movieList];
    let filteredMovieList = duplicateMovieList.filter((e) =>
      e.Title.toLowerCase().includes(filterText.toLowerCase())
    );
    setMovieList(filteredMovieList);
  }, [filterText, movieList]);

  return (
    <Box
      sx={{
        backgroundColor: COLORS.BLUE[400],
        padding: "58px 48px",
      }}
    >
      <SearchBar
        setFilterText={setFilterText}
        setSelectedMovieName={setSelectedMovieName}
      />
      <MovieDescription
        selectedMovieName={selectedMovieName}
        movieList={movieList}
      />
      <Grid container spacing={4}>
        {movieList.map(({ Title, Poster }, index) => {
          return (
            <Grid item xs={6} sm={4} md={3} lg={3} key={index} columnGap={26}>
              <MovieCard
                Title={Title}
                Poster={Poster}
                setSelectedMovieName={setSelectedMovieName}
              />
            </Grid>
          );
        })}
      </Grid>
      <Box sx={{ marginTop: "40px", color: COLORS.GREY[100] }}>
        {movieList.length === 0 && "No results found for your search."}
      </Box>
    </Box>
  );
};
export default MoviesList;
