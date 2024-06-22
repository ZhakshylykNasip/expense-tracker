import React, { useState } from "react";
import { NewExpense } from "./components/new-expense/NewExpense";
import { EXPENSES } from "./utils/constants";

const App = () => {
  const [expenses, setExpenses] = useState(EXPENSES);

  return (
    <div>
      <NewExpense />
    </div>
  );
};
export default App;
