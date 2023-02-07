import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ProfileAvatar } from "../../components";
import { COLORS } from "../../constants";
import {
  PlaylistIcon,
  MovieIcon,
  TVShowIcon,
  MyListIcon,
  DiscoverIcon,
  WatchLaterIcon,
  RecomendedIcon,
  SettingsIcon,
  LogoutIcon,
} from "../Icons";

const Navbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.BLUE[200],
        paddingTop: "40px",
        height: "100%",
      }}
    >
      <ProfileAvatar />
      <Divider
        sx={{
          borderColor: COLORS.BLUE[100],
          marginTop: "20px",
          marginBottom: "13px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DiscoverIcon style={{ marginTop: "10px" }} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: COLORS.BLUE[300],
                }}
                primary="Discover"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PlaylistIcon style={{ marginTop: "10px" }} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: COLORS.GREY[100],
                }}
                primary="Playlist"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MovieIcon style={{ marginTop: "10px" }} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: COLORS.GREY[100],
                }}
                primary="Movie"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TVShowIcon style={{ marginTop: "10px" }} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: COLORS.GREY[100],
                }}
                primary="TV Shows"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MyListIcon style={{ marginTop: "10px" }} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: COLORS.GREY[100],
                }}
                primary="My List"
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <Divider
        sx={{
          borderColor: COLORS.BLUE[100],
          marginY: "12px",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <WatchLaterIcon style={{ marginTop: "10px" }} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: COLORS.GREY[100],
                }}
                primary="Watch Later"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <RecomendedIcon style={{ marginTop: "10px" }} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: COLORS.GREY[100],
                }}
                primary="Recomended"
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <Divider
        sx={{
          borderColor: COLORS.BLUE[100],
          marginY: "12px",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon style={{ marginTop: "10px" }} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: COLORS.GREY[100],
                }}
                primary="Settings"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon style={{ marginTop: "10px" }} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: COLORS.GREY[100],
                }}
                primary="Logout"
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
export default Navbar;
