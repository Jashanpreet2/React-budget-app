import { AppContext } from "../context/AppContext";
import { useContext } from "react";

export default function Currency() {
  const { dispatch } = useContext(AppContext);

  const handleChange = (e) => {
    const action = {
      type: "CHG_CURRENCY",
      payload: e.target.value,
    };

    dispatch(action);
  };

  return (
    <select
      className="alert"
      style={{ backgroundColor: "lightblue" }}
      onChange={handleChange}
    >
      <option value="€">€ Euro</option>
      <option value="£">£ Pound</option>
      <option value="$">$ Dollar</option>
      <option value="₹">₹ Rupee</option>
    </select>
  );
}
