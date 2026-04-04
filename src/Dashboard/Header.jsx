import { Box, Button, Typography, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { tokens } from "../Theme";
import { mockTransactions } from "../Data/mockData";

const Header = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isDark = theme.palette.mode === "dark";

  const handleDownloadCSV = () => {
    const headers = ["Transaction ID", "User", "Date", "Cost"];
    const rows = mockTransactions.map((item) => [
      item.txId,
      item.user,
      item.date,
      item.cost,
    ]);

    const csvContent = [headers, ...rows].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "zorvyn-transactions-report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems={{ xs: "stretch", sm: "center" }}
      flexDirection={{ xs: "column", sm: "row" }}
      gap="16px"
      mb="20px"
    >
      <Typography
        variant="h3"
        color={isDark ? colors.grey[100] : "#111827"}
        fontWeight="600"
        sx={{ m: 0, fontSize: { xs: "28px", sm: "32px" } }}
      >
        Dashboard
      </Typography>

      <Button
        onClick={handleDownloadCSV}
        startIcon={<DownloadOutlinedIcon />}
        sx={{
          alignSelf: { xs: "flex-start", sm: "center" },
          backgroundColor: colors.blueAccent[500],
          color: "#fff",
          textTransform: "none",
          padding: { xs: "8px 14px", sm: "10px 18px" },
          borderRadius: "10px",
          fontWeight: "600",
          minWidth: { xs: "170px", sm: "190px" },
          boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
          "&:hover": {
            backgroundColor: colors.blueAccent[600],
          },
        }}
      >
        Download Reports
      </Button>
    </Box>
  );
};

export default Header;