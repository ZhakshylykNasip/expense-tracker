import React, { useState } from "react";
import { ExpensesList } from "./expensesList/ExpensesList";
import { Card } from "../UI/Card/Card";
import { ExpenseFilter } from "../expenseFilter/ExpenseFilter";
import { Chart } from "../chart/Chart";

export const Expenses = ({ expenses }) => {
  const [selectedFilter, setSelectedFilter] = useState("2024");

  const handleSelected = (event) => {
    setSelectedFilter(event.target.value);
  };

  const filteredExpenses = expenses.filter((item) => {
    const year = item.date.getFullYear().toString();
    return year === selectedFilter;
  });

  return (
    <Card>
      <ExpenseFilter value={selectedFilter} onChange={handleSelected} />
      <Chart />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};
