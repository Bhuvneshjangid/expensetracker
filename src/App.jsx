import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import './App.css'
import { useState } from 'react'

function App() {

  const[expense,setExpense]=useState([])

  const addExpense = (expense) => {
    setExpense((prev) => [...prev,{...expense, id:Date.now() }] )
  }

  return (
    <>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAdd={addExpense}/>
      <ExpenseList expense={expense}/>
    </>
  )
}

export default App
