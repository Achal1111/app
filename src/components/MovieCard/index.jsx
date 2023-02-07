import { PlayButtonIcon, AddToPlaylistIcon } from "../Icons";
import { COLORS } from "../../constants";
import { Stack, Box, Typography } from "@mui/material";

const MovieCard = ({ Title, Poster, setSelectedMovieName }) => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.BLUE[100],
        cursor: "pointer",
        padding: "8px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
      }}
      onClick={() => {
        setSelectedMovieName(Title);
      }}
    >
      <img src={Poster} alt="movie-poster" height={200} />

      <Typography
        variant="h6"
        sx={{
          color: COLORS.GREY[100],
          whiteSpace: "nowrap",
          textOPverflow: "ellipsis",
          overflow: "hidden",
        }}
      >
        {Title}
      </Typography>
      <Stack direction="row" spacing={2} sx={{ marginTop: "12px" }}>
        <PlayButtonIcon />
        <AddToPlaylistIcon />
      </Stack>
    </Box>
  );
};
export default MovieCard;
