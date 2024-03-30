import { AppContext } from "../context/AppContext";
import { useContext, useState } from "react";

export default function Budget() {
  let { budget, currency, dispatch } = useContext(AppContext);
  let [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (e) => {
    setNewBudget(e.target.value);
    dispatch({type: 'SET_BUDGET', payload: e.target.value})
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        min="1000"
        max="20000"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
}
