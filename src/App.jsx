import React, { useState } from "react";
import { NewExpense } from "./components/new-expense/NewExpense";
import { EXPENSES } from "./utils/constants";
import { Expenses } from "./components/expenses/Expenses";

const App = () => {
  const [expenses, setExpenses] = useState(EXPENSES);

  const onAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div>
      <NewExpense onAddExpense={onAddExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
};
export default App;
