import { AppContext } from "../context/AppContext";
import { useContext } from "react";

export default function Remaining() {
  const { budget, remaining, currency } = useContext(AppContext);

  const alertType = remaining <= budget ? "alert-success" : "alert-danger";

  return (
    <div className={`alert ${alertType}`}>
      <span>
        Remaining: {currency}
        {remaining}
      </span>
    </div>
  );
}
