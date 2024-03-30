import { AppContext } from "../context/AppContext";
import { useState, useContext } from "react";

export default function AllocationForm() {
  const { expenses, currency, dispatch } = useContext(AppContext);

  let [department, setDepartment] = useState(expenses[0].department);
  let [actionType, setActionType] = useState("ADD_EXPENSE");
  let [amount, setAmount] = useState();

  const handleSubmit = () => {
    const payload = {
      department: department,
      amount: parseInt(amount),
    };

    console.log(payload);
    const action = {
      type: actionType,
      payload: payload,
    };

    dispatch(action);
  };

  return (
    <div>
      <div className="row">
        <div className="input-group mb-3" style={{ marginLeft: "2rem" }}>
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="department-select">
              Department
            </label>
          </div>
          <select
            className="custom-select"
            id="department-select"
            name="department"
            required
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
            value={department}
          >
            {expenses.map((expense) => (
              <option key={expense.department} value={expense.department}>
                {expense.department}
              </option>
            ))}
          </select>

          <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
            <label className="input-group-text" htmlFor="action-type-select">
              Allocation:
            </label>
          </div>
          <select
            className="custom-select"
            id="action-type-select"
            onChange={(e) => {
              setActionType(e.target.value);
            }}
            value={actionType}
          >
            <option value="ADD_EXPENSE">Add</option>
            <option value="RED_EXPENSE">Reduce</option>
          </select>

          <label htmlFor="amount" style={{ marginLeft: "2rem" }}>
            {currency}
          </label>
          <input
            name="amount"
            required
            type="number"
            min={0}
            style={{ size: 10 }}
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />

          <button
            className="btn btn-primary"
            style={{ marginLeft: "2rem" }}
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
