import { Box, Typography, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { tokens } from "../Theme";

const LinePage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isDark = theme.palette.mode === "dark";

  const data = [
    {
      id: "balance",
      color: "#4fd1ff",
      data: [
        { x: "Jan", y: 1200 },
        { x: "Feb", y: 1800 },
        { x: "Mar", y: 1400 },
        { x: "Apr", y: 2200 },
        { x: "May", y: 1900 },
        { x: "Jun", y: 2600 },
      ],
    },
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
        Line Chart
      </Typography>

      <Box height="400px">
        <ResponsiveLine
          data={data}
          theme={{
            textColor: isDark ? colors.grey[100] : "#111827",
            axis: {
              domain: {
                line: {
                  stroke: isDark ? colors.grey[500] : "#d1d5db",
                },
              },
              ticks: {
                line: {
                  stroke: isDark ? colors.grey[500] : "#d1d5db",
                },
                text: {
                  fill: isDark ? colors.grey[100] : "#111827",
                },
              },
              legend: {
                text: {
                  fill: isDark ? colors.grey[100] : "#111827",
                },
              },
            },
            grid: {
              line: {
                stroke: isDark ? colors.primary[300] : "#e5e7eb",
                strokeWidth: 1,
              },
            },
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
          margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: false,
            reverse: false,
          }}
          curve="monotoneX"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Month",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Amount",
            legendOffset: -45,
            legendPosition: "middle",
          }}
          enableGridX={false}
          enableGridY={true}
          colors={["#4fd1ff"]}
          lineWidth={5}
          pointSize={10}
          pointColor="#4fd1ff"
          pointBorderWidth={2}
          pointBorderColor="#ffffff"
          useMesh={true}
        />
      </Box>
    </Box>
  );
};

export default LinePage;