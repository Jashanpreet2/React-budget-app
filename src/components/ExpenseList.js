import { AppContext } from "../context/AppContext";
import { useContext } from "react";

import ExpenseItem from "./ExpenseItem";

export default function ExpenseList(props) {
  const { expenses } = useContext(AppContext);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Department</th>
          <th scope="col">Allocated Budget</th>
          <th scope="col">Increase by 10</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            key={expense.id}
            department={expense.department}
            budget={expense.budget}
          />
        ))}
      </tbody>
    </table>
  );
}
