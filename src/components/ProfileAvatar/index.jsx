import profilePhoto from "../../images/profilePhoto.png";
import { Typography, Box, Avatar } from "@mui/material";
import { COLORS } from "../../constants";

const ProfileAvatar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "8px",
      }}
    >
      <Avatar
        alt="Achal Mehta"
        src={profilePhoto}
        sx={{ width: 90, height: 90 }}
      />
      <Typography
        variant="h6"
        sx={{
          color: COLORS.GREY[100],
          fontSize: "20px",
          fontWeight: 600,
        }}
      >
        Achal Mehta
      </Typography>
    </Box>
  );
};
export default ProfileAvatar;
