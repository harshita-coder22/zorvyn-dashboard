import { Box, Typography, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../Theme";

const PiePage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isDark = theme.palette.mode === "dark";

  const data = [
    { id: "Food", label: "Food", value: 320 },
    { id: "Bills", label: "Bills", value: 220 },
    { id: "Travel", label: "Travel", value: 180 },
    { id: "Shopping", label: "Shopping", value: 260 },
  ];

  return (
    <Box
      p="20px"
      borderRadius="12px"
      backgroundColor={isDark ? colors.primary[400] : "#ffffff"}
      boxShadow={isDark ? "none" : "0 2px 10px rgba(0,0,0,0.06)"}
    >
      <Typography
        variant="h3"
        mb="20px"
        color={isDark ? colors.grey[100] : "#111827"}
      >
        Pie Chart
      </Typography>

      <Box height="400px">
        <ResponsivePie
          data={data}
          theme={{
            textColor: isDark ? colors.grey[100] : "#111827",
            legends: {
              text: {
                fill: isDark ? colors.grey[100] : "#111827",
              },
            },
            tooltip: {
              container: {
                background: isDark ? colors.primary[500] : "#ffffff",
                color: isDark ? colors.grey[100] : "#111827",
                fontSize: 12,
                borderRadius: "8px",
                boxShadow: isDark
                  ? "0 2px 8px rgba(0,0,0,0.35)"
                  : "0 2px 8px rgba(0,0,0,0.12)",
              },
            },
          }}
          margin={{ top: 20, right: 80, bottom: 40, left: 80 }}
          innerRadius={0.6}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          colors={{ scheme: "set2" }}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor={isDark ? colors.grey[100] : "#111827"}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={isDark ? "#ffffff" : "#111827"}
          valueFormat=">-.0f"
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateY: 32,
              itemsSpacing: 8,
              itemWidth: 70,
              itemHeight: 18,
              itemTextColor: isDark ? colors.grey[100] : "#111827",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 12,
              symbolShape: "circle",
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default PiePage;