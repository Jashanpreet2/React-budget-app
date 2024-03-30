import { AppContext } from "../context/AppContext";
import { useContext } from "react";

export default function Remaining() {
  const { budget, expenses, currency } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, expense) => {
    total = total + expense.budget;
    return total;
  }, 0);

  const remaining = budget - totalExpenses;

  const alertType = totalExpenses <= budget ? "alert-success" : "alert-danger";

  return (
    <div class={`alert ${alertType}`}>
      <span>
        Remaining: {currency}
        {remaining}
      </span>
    </div>
  );
}
