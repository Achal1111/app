import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { COLORS } from "../../constants";

export const CustomizedContainedButton = styled(Button)(() => ({
  color: COLORS.BLACK,
  backgroundColor: COLORS.BLUE[300],
  fontWeight: "600",
  textTransform: "none",
  paddingLeft: "20px",
  paddingRight: "20px",
  "&:hover": {
    backgroundColor: COLORS.BLUE[300],
  },
}));
