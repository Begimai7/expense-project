
import { useState } from 'react';
import './App.css';
import  Expenses  from './components/expenses/Expenses';
import { NewExpenses } from './components/new-expenses/NewExpenses';

// const expenses = [
//   {
//   title: 'Toilet paper',
//   price: "2000 сом",
//   date: new Date()
// },
// {
//   title: 'Raper',
//   price: 100,
//   date: new Date()
// },
// ]

function App() {
 
  const [expenses, setExpenses] = useState([
    {
    title: 'Toilet paper',
    price: "2000 сом",
    date: new Date()
  },
  {
    title: 'Raper',
    price: 100,
    date: new Date()
  },
  ])

  const onNewExpensesAdd = (data) => {
    
    const updatedExpenses = [...expenses]
    updatedExpenses.push(data)
    setExpenses(updatedExpenses)
  }

  return (
    <div className="App">
      <NewExpenses onNewExpensesAdd ={onNewExpensesAdd}/>
      <Expenses expenses={expenses}/>
     
    </div>
  );
}

export default App;
