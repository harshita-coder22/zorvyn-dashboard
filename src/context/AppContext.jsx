import { createContext, useState } from "react";
import { mockTransactions } from "../Data/mockData";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // 🔹 Role state
  const [role, setRole] = useState("Admin");

  // 🔹 Transactions
  const [transactions, setTransactions] = useState(mockTransactions);

  // 🔹 Filter
  const [filterType, setFilterType] = useState("all");

  // 🔹 Filtered data
  const filteredTransactions =
    filterType === "all"
      ? transactions
      : transactions.filter((t) => t.type === filterType);

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        transactions,
        setTransactions,
        filterType,
        setFilterType,
        filteredTransactions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};