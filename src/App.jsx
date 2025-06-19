import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import './App.css'
import { useState } from 'react'
import Summary from './components/Summary'

function App() {

  const[expenses,setExpenses]=useState([])

  const addExpenses = (expenses) => {
    setExpenses((prev) => [...prev,{...expenses, id:Date.now() }] )
  }

  return (
    <>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAdd={addExpenses}/>
      <Summary expenses={expenses}  />
      <ExpenseList expenses={expenses}/>
    </>
  )
}

export default App
