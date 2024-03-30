import { AppContext } from "../context/AppContext";
import { useContext } from "react";

export default function ExpenseTotal() {
  const { expenses, currency } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, expense) => {
    total = total + expense.budget;
    return total;
  }, 0);

  return (
    <div className={`alert alert-primary`}>
      <span>
        Spend so far: {currency}
        {totalExpenses}
      </span>
    </div>
  );
}
