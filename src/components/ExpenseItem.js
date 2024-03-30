import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import{ FiMinusCircle, FiPlusCircle } from "react-icons/fi"
import { TiDelete } from "react-icons/ti";

export default function ExpenseItem(props) {
  const { currency, dispatch } = useContext(AppContext);

  const handleIncrease = () => {
    dispatch({type: 'ADD_EXPENSE', payload: {department: props.department, amount: 10}})
  }

  const handleDecrease = () => {
    dispatch({type: 'RED_EXPENSE', payload: {department: props.department, amount: 10}})
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
      <td><FiPlusCircle size="1.5em" onClick={handleIncrease}/></td>
      <td><FiMinusCircle size="1.5em" onClick={handleDecrease}/></td>
      <td><TiDelete size="2em" onClick={handleDelete}/></td>
    </tr>
  );
}
