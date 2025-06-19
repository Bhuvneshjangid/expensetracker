import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Summary from './components/Summary';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenses = (expense) => {
    setExpenses((prev) => [...prev, { ...expense, id: Date.now() }]);
  };

  return (
    <div className="app-container">
      <h1 className="main-title">💸 Expense Tracker</h1>
      <ExpenseForm onAdd={addExpenses} />
      <Summary expenses={expenses} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
