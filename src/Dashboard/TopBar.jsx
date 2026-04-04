import { Box, IconButton, useTheme, MenuItem, Select } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../Theme";
import { AppContext } from "../context/AppContext";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Topbar = ({ isMobile }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { role, setRole } = useContext(AppContext);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={isMobile ? "8px 10px" : "10px 16px"}
      position="sticky"
      top={0}
      zIndex={1000}
      backgroundColor={
        theme.palette.mode === "dark" ? colors.primary[500] : "#ffffff"
      }
    >
      <Box display="flex" alignItems="center" ml={isMobile ? 0 : "10px"}>
        <Select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          size="small"
          sx={{
            backgroundColor:
              theme.palette.mode === "dark" ? colors.primary[400] : "#f8fafc",
            color:
              theme.palette.mode === "dark" ? colors.grey[100] : "#111827",
            borderRadius: "8px",
            height: isMobile ? "32px" : "35px",
            minWidth: isMobile ? "90px" : "120px",
            ".MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiSvgIcon-root": {
              color:
                theme.palette.mode === "dark" ? colors.grey[100] : "#111827",
            },
          }}
        >
          <MenuItem value="Admin">Admin</MenuItem>
          <MenuItem value="Viewer">Viewer</MenuItem>
        </Select>
      </Box>

      <Box display="flex" alignItems="center">
        <IconButton size={isMobile ? "small" : "medium"} onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon sx={{ color: colors.grey[100] }} />
          ) : (
            <LightModeOutlinedIcon sx={{ color: "#111827" }} />
          )}
        </IconButton>

        {!isMobile && (
          <IconButton>
            <NotificationsOutlinedIcon
              sx={{
                color:
                  theme.palette.mode === "dark" ? colors.grey[100] : "#111827",
              }}
            />
          </IconButton>
        )}

        <IconButton size={isMobile ? "small" : "medium"}>
          <SettingsOutlinedIcon
            sx={{
              color:
                theme.palette.mode === "dark" ? colors.grey[100] : "#111827",
            }}
          />
        </IconButton>

        <IconButton size={isMobile ? "small" : "medium"}>
          <PersonOutlinedIcon
            sx={{
              color:
                theme.palette.mode === "dark" ? colors.grey[100] : "#111827",
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;