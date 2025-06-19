import React, { useState } from "react";
import "./ExpenseForm.css"; // 🎨 External CSS file for styling

const ExpenseForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) return;

    onAdd({
      title,
      amount: parseFloat(amount),
      type,
    });

    setTitle("");
    setAmount("");
    setType("expense");
  };

  return (
    <div className="expense-form-container">
      <h2 className="form-title">Add New Transaction</h2>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="e.g. Groceries"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount (₹)</label>
          <input
            id="amount"
            type="number"
            placeholder="e.g. 150"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
