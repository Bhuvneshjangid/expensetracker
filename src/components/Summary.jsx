const Summary = ({ expenses = [] }) => {
  const income = expenses
    .filter((e) => e.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpense = expenses
    .filter((e) => e.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="summary">
      <div>
        Income: <strong className="income">₹{income}</strong>
      </div>
      <div>
        Expense: <strong className="expense">₹{totalExpense}</strong>
      </div>
      <div>
        Balance: <strong>₹{income - totalExpense}</strong>
      </div>
    </div>
  );
};

export default Summary;
