import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";
import { COLORS } from "../../constants";

export const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: COLORS.BLUE[500],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: COLORS.BLUE[300],
  },
}))(LinearProgress);
