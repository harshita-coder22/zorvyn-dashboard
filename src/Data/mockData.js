// TRANSACTIONS DATA
export const mockTransactions = [
  {
    txId: "1",
    date: "06 Apr 2026",
    cost: 2800,
    category: "Food",
    status: "Completed",
    type: "Expense",
  },
   {
    txId: "2",
    date: "08 Apr 2026",
    cost: 1800,
    category: "Electric",
    status: "Pending",
    type: "Expense",
  },
   {
    txId: "3",
    date: "07 Apr 2026",
    cost: 8000,
    category: "Tax",
    status: "Completed",
    type: "Expense",
  },
   {
    txId: "4",
    date: "09 Apr 2026",
    cost: 800,
    category: "Internet",
    status: "Pending",
    type: "Expense",
  },
  {
    txId: "5",
    date: "04 Apr 2026",
    cost: 63000,
    category: "Salary",
    status: "Completed",
    type: "Income",
  },
  {
    txId: "6",
    date: "01 Apr 2026",
    cost: 8200,
    category: "Software",
    status: "Pending",
    type: "Expense",
  },
  {
    txId: "7",
    date: "03 Apr 2026",
    cost: 1000,
    category: "Travel",
    status: "Pending",
    type: "Expense",
  },
  {
    txId: "8",
    date: "02 Apr 2026",
    cost: 18000,
    category: "Marketing",
    status: "Completed",
    type: "Expense",
  },
];

// LINE CHART DATA (single clean finance trend)
export const mockLineData = [
  {
    id: "balance",
    data: [
      { x: "Jan", y: 12000 },
      { x: "Feb", y: 18000 },
      { x: "Mar", y: 15000 },
      { x: "Apr", y: 22000 },
      { x: "May", y: 20000 },
      { x: "Jun", y: 26000 },
    ],
  },
];

// PIE CHART DATA (expense breakdown)
export const mockPieData = [
  {
    id: "Payroll",
    label: "Payroll",
    value: 405,
  },
  {
    id: "Marketing",
    label: "Marketing",
    value: 245,
  },
  {
    id: "Operations",
    label: "Operations",
    value: 186,
  },
  {
    id: "Technology",
    label: "Technology",
    value: 164,
  },
];