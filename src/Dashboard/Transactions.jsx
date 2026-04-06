// import {
//   Box,
//   Typography,
//   Button,
//   TextField,
//   MenuItem,
//   useTheme,
// } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import { tokens } from "../Theme";
// import AddIcon from "@mui/icons-material/Add";
// import { useContext, useMemo, useState } from "react";
// import { AppContext } from "../context/AppContext";

// const Transactions = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const isDark = theme.palette.mode === "dark";

//   const { role, filteredTransactions, setFilterType } = useContext(AppContext);
//   const [searchTerm, setSearchTerm] = useState("");

//   const searchedTransactions = useMemo(() => {
//     return filteredTransactions.filter((item) => {
//       const search = searchTerm.toLowerCase();

//       return (
//         item.date.toLowerCase().includes(search) ||
//         String(item.cost).toLowerCase().includes(search) ||
//         item.category.toLowerCase().includes(search) ||
//         item.status.toLowerCase().includes(search) ||
//         item.type.toLowerCase().includes(search)
//       );
//     });
//   }, [filteredTransactions, searchTerm]);

//   const columns = [
//     { field: "date", headerName: "Date", flex: 1, minWidth: 120 },
//     { field: "cost", headerName: "Amount", flex: 1, minWidth: 110 },
//     { field: "category", headerName: "Category", flex: 1, minWidth: 130 },
//     {
//       field: "status",
//       headerName: "Status",
//       flex: 1,
//       minWidth: 120,
//       renderCell: ({ value }) => (
//         <Typography
//           color={
//             value === "Completed"
//               ? colors.greenAccent[500]
//               : value === "Pending"
//               ? "#facc15"
//               : colors.redAccent[500]
//           }
//         >
//           {value}
//         </Typography>
//       ),
//     },
//     { field: "type", headerName: "Type", flex: 1, minWidth: 100 },
//   ];

//   return (
//     <Box
//       mt="20px"
//       p="20px"
//       borderRadius="12px"
//       backgroundColor={isDark ? colors.primary[400] : "#ffffff"}
//       boxShadow={isDark ? "none" : "0 2px 10px rgba(0,0,0,0.06)"}
//     >
//       <Box
//         display="flex"
//         justifyContent="space-between"
//         alignItems={{ xs: "stretch", md: "center" }}
//         flexDirection={{ xs: "column", md: "row" }}
//         gap="16px"
//         mb="20px"
//       >
//         <Typography color={isDark ? colors.grey[100] : "#111827"} variant="h4">
//           Transactions
//         </Typography>

//         <Box display="flex" gap="10px">
//           {role === "Admin" && (
//             <Button
//               variant="contained"
//               startIcon={<AddIcon />}
//               sx={{
//                 backgroundColor: colors.blueAccent[500],
//                 textTransform: "none",
//                 borderRadius: "8px",
//                 "&:hover": {
//                   backgroundColor: colors.blueAccent[600],
//                 },
//               }}
//             >
//               Add Transaction
//             </Button>
//           )}
//         </Box>
//       </Box>

//       <Box
//         display="flex"
//         justifyContent="space-between"
//         alignItems={{ xs: "stretch", md: "center" }}
//         flexDirection={{ xs: "column", md: "row" }}
//         gap="12px"
//         mb="15px"
//       >
//         <TextField
//           placeholder="Search..."
//           size="small"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           sx={{
//             width: { xs: "100%", md: "260px" },
//             backgroundColor: isDark ? colors.primary[500] : "#f8fafc",
//             borderRadius: "6px",
//             input: {
//               color: isDark ? colors.grey[100] : "#111827",
//             },
//             "& .MuiOutlinedInput-notchedOutline": {
//               borderColor: isDark ? colors.primary[300] : "#d1d5db",
//             },
//           }}
//         />

//         <TextField
//           select
//           size="small"
//           defaultValue="all"
//           onChange={(e) => setFilterType(e.target.value)}
//           sx={{
//             width: { xs: "100%", md: "150px" },
//             backgroundColor: isDark ? colors.primary[500] : "#f8fafc",
//             borderRadius: "6px",
//             "& .MuiSelect-select": {
//               color: isDark ? colors.grey[100] : "#111827",
//             },
//             "& .MuiSvgIcon-root": {
//               color: isDark ? colors.grey[100] : "#111827",
//             },
//             "& .MuiOutlinedInput-notchedOutline": {
//               borderColor: isDark ? colors.primary[300] : "#d1d5db",
//             },
//           }}
//         >
//           <MenuItem value="all">All Types</MenuItem>
//           <MenuItem value="income">Income</MenuItem>
//           <MenuItem value="expense">Expense</MenuItem>
//         </TextField>
//       </Box>

//       <Box
//         height="350px"
//         sx={{
//           "& .MuiDataGrid-root": {
//             border: "none",
//             color: isDark ? colors.grey[100] : "#111827",
//           },
//           "& .MuiDataGrid-cell": {
//             borderBottom: isDark ? "none" : "1px solid #e5e7eb",
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             backgroundColor: isDark ? colors.primary[500] : "#f8fafc",
//             color: isDark ? colors.grey[100] : "#111827",
//             borderBottom: "none",
//           },
//           "& .MuiDataGrid-virtualScroller": {
//             backgroundColor: isDark ? colors.primary[400] : "#ffffff",
//           },
//           "& .MuiDataGrid-footerContainer": {
//             backgroundColor: isDark ? colors.primary[500] : "#f8fafc",
//             color: isDark ? colors.grey[100] : "#111827",
//             borderTop: "none",
//           },
//           "& .MuiDataGrid-row": {
//             color: isDark ? colors.grey[100] : "#111827",
//           },
//           "& .MuiTablePagination-root": {
//             color: isDark ? colors.grey[100] : "#111827",
//           },
//           "& .MuiSvgIcon-root": {
//             color: isDark ? colors.grey[100] : "#111827",
//           },
//           "& .MuiCheckbox-root": {
//             color: `${colors.greenAccent[500]} !important`,
//           },
//         }}
//       >
//         <DataGrid
//           rows={searchedTransactions}
//           columns={columns}
//           getRowId={(row) => row.txId}
//           pageSizeOptions={[5, 10]}
//           initialState={{
//             pagination: {
//               paginationModel: { pageSize: 5, page: 0 },
//             },
//           }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Transactions;

import {
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
  useTheme,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../Theme";
import AddIcon from "@mui/icons-material/Add";
import { useContext, useMemo, useState } from "react";
import { AppContext } from "../context/AppContext";

const Transactions = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isDark = theme.palette.mode === "dark";

  const {
    role,
    filteredTransactions,
    setFilterType,
    filterType,
  } = useContext(AppContext);

  const [searchTerm, setSearchTerm] = useState("");

  // Search Filter
  const searchedTransactions = useMemo(() => {
    return filteredTransactions.filter((item) => {
      const search = searchTerm.toLowerCase();

      return (
        item?.date?.toLowerCase().includes(search) ||
        String(item?.cost)?.toLowerCase().includes(search) ||
        item?.category?.toLowerCase().includes(search) ||
        item?.status?.toLowerCase().includes(search) ||
        item?.type?.toLowerCase().includes(search)
      );
    });
  }, [filteredTransactions, searchTerm]);

  // Table Columns
  const columns = [
    { field: "date", headerName: "Date", flex: 1, minWidth: 120 },
    { field: "cost", headerName: "Amount", flex: 1, minWidth: 110 },
    { field: "category", headerName: "Category", flex: 1, minWidth: 130 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      minWidth: 120,
      renderCell: ({ value }) => (
        <Typography
          color={
            value === "Completed"
              ? colors.greenAccent[500]
              : value === "Pending"
              ? "#facc15"
              : colors.redAccent[500]
          }
        >
          {value}
        </Typography>
      ),
    },
    { field: "type", headerName: "Type", flex: 1, minWidth: 100 },
  ];

  return (
    <Box
      mt="20px"
      p="20px"
      borderRadius="12px"
      backgroundColor={isDark ? colors.primary[400] : "#ffffff"}
      boxShadow={isDark ? "none" : "0 2px 10px rgba(0,0,0,0.06)"}
    >
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems={{ xs: "stretch", md: "center" }}
        flexDirection={{ xs: "column", md: "row" }}
        gap="16px"
        mb="20px"
      >
        <Typography
          color={isDark ? colors.grey[100] : "#111827"}
          variant="h4"
        >
          Transactions
        </Typography>

        {role === "Admin" && (
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              backgroundColor: colors.blueAccent[500],
              textTransform: "none",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: colors.blueAccent[600],
              },
            }}
          >
            Add Transaction
          </Button>
        )}
      </Box>

      {/* Search & Filter */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems={{ xs: "stretch", md: "center" }}
        flexDirection={{ xs: "column", md: "row" }}
        gap="12px"
        mb="15px"
      >
        {/* Search */}
        <TextField
          placeholder="Search..."
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            width: { xs: "100%", md: "260px" },
            backgroundColor: isDark ? colors.primary[500] : "#f8fafc",
            borderRadius: "6px",
            input: {
              color: isDark ? colors.grey[100] : "#111827",
            },
          }}
        />

        {/* Filter */}
        <TextField
          select
          size="small"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          sx={{
            width: { xs: "100%", md: "150px" },
            backgroundColor: isDark ? colors.primary[500] : "#f8fafc",
            borderRadius: "6px",
          }}
        >
          <MenuItem value="all">All Types</MenuItem>
          <MenuItem value="Income">Income</MenuItem>
          <MenuItem value="Expense">Expense</MenuItem>
        </TextField>
      </Box>

      {/* Table */}
      <Box height="350px">
        <DataGrid
          rows={searchedTransactions}
          columns={columns}
          getRowId={(row) => row.txId}
          pageSizeOptions={[5, 10]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5, page: 0 },
            },
          }}
          sx={{
            border: "none",
            color: isDark ? colors.grey[100] : "#111827",
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: isDark
                ? colors.primary[500]
                : "#f8fafc",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Transactions;