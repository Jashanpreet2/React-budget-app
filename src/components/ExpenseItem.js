import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { TiDelete } from "react-icons/ti";

export default function ExpenseItem(props) {
  const { currency, dispatch } = useContext(AppContext);

  const handleIncrease = () => {
    dispatch({type: 'ADD_EXPENSE', payload: {department: props.department, increment: 10}})
  }

  const handleDelete = () => {
    dispatch({type:'DELETE_EXPENSE', payload: props.department})
  }

  return (
    <tr>
      <td>{props.department}</td>
      <td>
        {currency}
        {props.budget}
      </td>
      <td><button onClick={handleIncrease}>+</button></td>
      <td><TiDelete size="1.5em" onClick={handleDelete}/></td>
    </tr>
  );
}
