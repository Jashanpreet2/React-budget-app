import { AppContext } from "../context/AppContext";
import { useContext, useState } from "react";

export default function Budget() {
  let { remaining, budget, currency, dispatch } = useContext(AppContext);
  let [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (e) => {
    if (e.target.value > 20000) {
      alert("The value must not exceed 20000!");
    } else if (e.target.value < budget - remaining) {
      alert("The budget cannot be less than the amount spent so far!");
    } else {
      setNewBudget(e.target.value);
      dispatch({ type: "SET_BUDGET", payload: e.target.value });
    }
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
}
