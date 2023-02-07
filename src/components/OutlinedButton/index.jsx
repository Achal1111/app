import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { COLORS } from "../../constants";

export const CustomizedOutlinedButton = styled(Button)(() => ({
  color: COLORS.BLUE[300],
  backgroundColor: "transparent",
  textTransform: "none",
  paddingLeft: "20px",
  paddingRight: "20px",
  fontWeight: "600",
  border: `1px solid ${COLORS.BLUE[300]}`,
}));
