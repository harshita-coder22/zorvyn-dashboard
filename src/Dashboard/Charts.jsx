import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../Theme";
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";

const Charts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isDark = theme.palette.mode === "dark";

  const financeLineData = [
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

  const financePieData = [
    { id: "Food", label: "Food", value: 320 },
    { id: "Bills", label: "Bills", value: 220 },
    { id: "Travel", label: "Travel", value: 180 },
    { id: "Shopping", label: "Shopping", value: 260 },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          lg: "2fr 1fr",
        },
        gap: "20px",
      }}
    >
      <Box
        p="20px"
        borderRadius="12px"
        backgroundColor={isDark ? colors.primary[400] : "#ffffff"}
        sx={{
          boxShadow: isDark
            ? "0px 0px 22px rgba(79, 209, 255, 0.10)"
            : "0px 2px 10px rgba(0,0,0,0.06)",
        }}
      >
        <Typography
          variant="h5"
          color={isDark ? colors.grey[100] : "#111827"}
          mb="10px"
        >
          Balance Trend
        </Typography>

        <Box height={{ xs: "260px", md: "300px" }}>
          <ResponsiveLine
            data={financeLineData}
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
            pointSize={12}
            pointColor="#4fd1ff"
            pointBorderWidth={3}
            pointBorderColor="#ffffff"
            enablePoints={true}
            enableArea={true}
            areaOpacity={0.22}
            useMesh={true}
            enableSlices="x"
            legends={[]}
          />
        </Box>
      </Box>

      <Box
        p="20px"
        borderRadius="12px"
        backgroundColor={isDark ? colors.primary[400] : "#ffffff"}
        sx={{
          boxShadow: isDark ? "none" : "0px 2px 10px rgba(0,0,0,0.06)",
        }}
      >
        <Typography
          variant="h5"
          color={isDark ? colors.grey[100] : "#111827"}
          mb="10px"
        >
          Expense Breakdown
        </Typography>

        <Box height={{ xs: "260px", md: "300px" }}>
          <ResponsivePie
            data={financePieData}
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
    </Box>
  );
};

export default Charts;