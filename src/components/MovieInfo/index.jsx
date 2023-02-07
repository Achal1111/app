import createSpacing from "@material-ui/core/styles/createSpacing";
import { Box, Stack } from "@mui/material";
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
      <Stack sx={{ mb: "15px" }}>Year: {selectedMovie?.Year}</Stack>
      <Stack sx={{ mb: "15px" }}>Running Time: {selectedMovie?.Runtime}</Stack>
      <Stack sx={{ mb: "15px" }}>Directed By: {selectedMovie?.Director}</Stack>
      <Stack>Language: {selectedMovie?.Language}</Stack>
    </Box>
  );
};
export default MovieInfo;
