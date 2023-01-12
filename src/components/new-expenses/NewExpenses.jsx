import { useState } from "react"
import { ExpensesForm } from "../expensesForm/ExpensesForm"
import { Button } from "../UI/Button/Button"
import "./NewExpenses.css"


export const NewExpenses = ({onNewExpensesAdd}) => {
  const [form, setForm] = useState(false)

  const openNewForm = () => {
   setForm((prevState) => !prevState)
  }

 return (
  <div className="add-consumption">
  
  { form ?  <ExpensesForm onClothForm={openNewForm} onNewExpensesAdd={onNewExpensesAdd} /> :  <Button onClick={openNewForm}>Добавить новый расход</Button>
  }
  </div>
 )
}