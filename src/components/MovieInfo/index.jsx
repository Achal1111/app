import { Box, Stack, Typography } from "@mui/material";
import { COLORS } from "../../constants";

const MovieInfo = ({ selectedMovie }) => {
  return (
    <Box
      sx={{
        color: COLORS.GREY[100],
        marginTop: "24px",
        fontSize: "16px",
        fontWeight: 700,
      }}
    >
      <Stack sx={{ mb: "15px" }}>
        <Typography>Year: {selectedMovie?.Year}</Typography>
      </Stack>
      <Stack sx={{ mb: "15px" }}>
        <Typography>Running Time: {selectedMovie?.Runtime}</Typography>
      </Stack>
      <Stack sx={{ mb: "15px" }}>
        <Typography>Directed By: {selectedMovie?.Director}</Typography>
      </Stack>
      <Stack>
        <Typography>Language: {selectedMovie?.Language}</Typography>
      </Stack>
    </Box>
  );
};
export default MovieInfo;
