import { Box, Typography, useTheme } from "@mui/material";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import SouthWestOutlinedIcon from "@mui/icons-material/SouthWestOutlined";
import NorthEastOutlinedIcon from "@mui/icons-material/NorthEastOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import { tokens } from "../Theme";
import { mockTransactions } from "../Data/mockData";

const StatCard = ({ title, value, subtitle, icon, accentColor }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        backgroundColor: isDark ? colors.primary[400] : "#ffffff",
        borderRadius: "14px",
        p: "20px",
        height: "100%",
        minHeight: "140px",
        boxShadow: isDark
          ? "0px 4px 18px rgba(0,0,0,0.18)"
          : "0px 2px 10px rgba(0,0,0,0.06)",
        transition: "all 0.3s ease",
        border: isDark ? `1px solid ${colors.primary[300]}` : "1px solid #e5e7eb",
        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h6" color={isDark ? colors.grey[300] : "#6b7280"} mb="8px">
            {title}
          </Typography>

          <Typography
            variant="h4"
            fontWeight="bold"
            color={isDark ? colors.grey[100] : "#111827"}
          >
            {value}
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: isDark ? colors.primary[500] : "#f8fafc",
            p: "10px",
            borderRadius: "12px",
            color: accentColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </Box>
      </Box>

      <Typography
        variant="h6"
        sx={{
          mt: "18px",
          color: accentColor,
          fontWeight: 500,
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

const SummaryCards = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const totalTransactions = mockTransactions.length;
  const totalExpenses = mockTransactions.reduce((acc, item) => acc + Number(item.cost), 0);
  const totalIncome = 15000;
  const totalBalance = totalIncome - totalExpenses;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 1fr",
          lg: "repeat(4, 1fr)",
        },
        gap: "20px",
        mb: "20px",
      }}
    >
      <StatCard
        title="Total Balance"
        value={`₹${totalBalance.toFixed(2)}`}
        subtitle="+2.4% from last month"
        icon={<AccountBalanceWalletOutlinedIcon />}
        accentColor={colors.blueAccent[500]}
      />

      <StatCard
        title="Total Income"
        value={`₹${totalIncome.toFixed(2)}`}
        subtitle="+4.8% from last month"
        icon={<NorthEastOutlinedIcon />}
        accentColor={colors.greenAccent[500]}
      />

      <StatCard
        title="Total Expenses"
        value={`₹${totalExpenses.toFixed(2)}`}
        subtitle="-1.7% from last month"
        icon={<SouthWestOutlinedIcon />}
        accentColor={colors.redAccent[500]}
      />

      <StatCard
        title="Total Transactions"
        value={totalTransactions}
        subtitle="Updated from recent activity"
        icon={<ReceiptLongOutlinedIcon />}
        accentColor={colors.blueAccent[500]}
      />
    </Box>
  );
};

export default SummaryCards;