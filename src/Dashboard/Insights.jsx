import { Box, Typography, IconButton, useTheme } from "@mui/material";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import { tokens } from "../Theme";

const InsightItem = ({ icon, title, subtitle, iconBg, iconColor }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p="14px 18px"
      borderRadius="12px"
      backgroundColor={isDark ? colors.primary[400] : "#ffffff"}
      height="100%"
      boxShadow={isDark ? "none" : "0px 2px 10px rgba(0,0,0,0.06)"}
    >
      <Box display="flex" alignItems="center" gap="14px">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: "46px",
            height: "46px",
            borderRadius: "12px",
            backgroundColor: iconBg,
            color: iconColor,
          }}
        >
          {icon}
        </Box>

        <Box>
          <Typography
            variant="h6"
            color={isDark ? colors.grey[100] : "#111827"}
            sx={{ lineHeight: "1.4", fontWeight: 500 }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="h6"
              color={isDark ? colors.grey[300] : "#6b7280"}
              sx={{ mt: "2px", lineHeight: "1.4" }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      </Box>

      <IconButton size="small">
        <KeyboardArrowRightOutlinedIcon
          sx={{ color: isDark ? colors.grey[300] : "#6b7280" }}
        />
      </IconButton>
    </Box>
  );
};

const Insights = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "1fr 1fr 1fr",
        },
        gap: "20px",
        mt: "20px",
        mb: "20px",
      }}
    >
      <Box
        p="18px 22px"
        borderRadius="12px"
        backgroundColor={isDark ? colors.primary[400] : "#ffffff"}
        display="flex"
        alignItems="center"
        boxShadow={isDark ? "none" : "0px 2px 10px rgba(0,0,0,0.06)"}
      >
        <Typography
          variant="h4"
          color={isDark ? colors.grey[100] : "#111827"}
          fontWeight="600"
        >
          Insights
        </Typography>
      </Box>

      <InsightItem
        icon={<TrendingUpOutlinedIcon />}
        title="You spent 15% more on"
        subtitle="Marketing than last month"
        iconBg="rgba(34, 211, 238, 0.12)"
        iconColor="#22d3ee"
      />

      <InsightItem
        icon={<ArrowDownwardOutlinedIcon />}
        title="This month's profit is"
        subtitle="₹4,000 less than last month"
        iconBg="rgba(239, 68, 68, 0.12)"
        iconColor="#f87171"
      />
    </Box>
  );
};

export default Insights;