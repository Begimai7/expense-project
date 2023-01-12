import { ExpenseItem } from "../expense-item/ExpenseItem"
import "./Expenses.css"

 const Expenses = ({expenses}) => {
 return (
  <ul className="expenses-list">
  {
   expenses.map((elem, index) => {
    return(
   <ExpenseItem key={index}
    date = {elem.date}
    title = {elem.title}
    price = {elem.price}
    />
    )})
  }
  </ul>
 )
}

export default Expenses;