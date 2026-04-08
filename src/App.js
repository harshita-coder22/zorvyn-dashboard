import { CssBaseline, ThemeProvider, Box, useMediaQuery } from "@mui/material";
import { ColorModeContext, useMode } from "./Theme";
import Topbar from "./Dashboard/TopBar.jsx";
import MySidebar from "./Dashboard/SideBar.jsx";
import Header from "./Dashboard/Header.jsx";
import SummaryCards from "./Dashboard/SummaryCards.jsx";
import Charts from "./Dashboard/Charts.jsx";
import Insights from "./Dashboard/Insights.jsx";
import Transactions from "./Dashboard/Transactions.jsx";

import { Routes, Route } from "react-router-dom";
import PiePage from "./Dashboard/PiePage.jsx";
import LinePage from "./Dashboard/LinePage.jsx";

function DashboardHome() {
  return (
    <>
      <Header />
      <SummaryCards />
      <Charts />
      <Insights />
      <Transactions />
    </>
  );
}

function App() {
  const [theme, colorMode] = useMode();
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Box display="flex" height="100vh" className="app">
          <MySidebar isMobile={isMobile} />

          <Box
            flex="1"
            display="flex"
            flexDirection="column"
            overflow="hidden"
            className="content"
            sx={{ minWidth: 0 }}
          >
            <Topbar isMobile={isMobile} />

            <Box
              flex="1"
              overflow="auto"
              p={{ xs: "12px", sm: "16px", md: "20px" }}
            >
              <Routes>
                <Route path="/" element={<DashboardHome />} />
                <Route path="/transaction" element={<Transactions />} />
                <Route path="/pie" element={<PiePage />} />
                <Route path="/line" element={<LinePage />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;