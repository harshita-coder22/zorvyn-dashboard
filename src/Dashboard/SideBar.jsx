import { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../Theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const MySidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery("(max-width:768px)");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  
  useEffect(() => {
    setIsCollapsed(isMobile);
  }, [isMobile]);

  return (
    <Box
      sx={{
        height: "100vh",
        "& .ps-sidebar-container": {
          background: `${colors.primary[400] } !important`,
          borderRight: "none !important",
        },
        "& .ps-menu-button": {
          color: `${colors.grey[100]} !important`,
        },
        "& .ps-menu-button:hover": {
          backgroundColor: "#1e293b !important",
          color: "#ffffff !important",
        },
        "& .ps-menu-button.ps-active": {
          backgroundColor: "#1e293b !important",
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar
        collapsed={isCollapsed}
        width="250px"
        collapsedWidth="80px"
        style={{ height: "100vh" }}
      >
        <Menu>
          {/* TOP SECTION */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                gap="10px"
                ml="10px"
                width="100%"
              >
                {/* LOGO */}
                <Box display="flex" alignItems="center" mt="50px">
                  <img
                    src="../../assets/company.png"
                    alt="company-logo"
                    height="40px"
                   style={{
                     objectFit: "contain",
                     transition: "all 0.3s ease",
                     cursor: "pointer",
                    }}
                   className="sidebar-logo"
                  />
                </Box>

                {/* ADMINIS + TOGGLE */}
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  width="100%"
                  mx="-10px"
                >
                  <Typography
                    variant="h5"
                    color={colors.grey[100]}
                  >
                    ADMIN
                  </Typography>

                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon sx={{ color: colors.grey[100] }} />
                  </IconButton>
                </Box>
              </Box>
            )}
          </MenuItem>

          {/* PROFILE */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="80px"
                  height="80px"
                  src="../../assets/Logo.png"
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h4"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Harshita
                </Typography>
                
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>

            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Transaction"
              to="/transaction"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Reports"
              to="/reports"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>

            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MySidebar;




