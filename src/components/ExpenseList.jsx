const ExpenseList = ({ expense = [] }) => {
  return (
    <div className="list">
      <h3>Transactions</h3>

      {expense.length === 0 ? (
        <p style={{ color: "#888", fontStyle: "italic" }}>No transactions found.</p>
      ) : (
        <ul>
          {expense.map((e) => (
            <li key={e.id}>
              <span>{e.title}</span>
              <span className={e.type === "income" ? "income" : "expense"}>
                ₹{e.amount}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
