const ExpenseList = ({ expenses = [] }) => {
  return (
    <div className="list">
      <h3>Transactions</h3>

      {expenses.length === 0 ? (
        <p style={{ color: "#888", fontStyle: "italic" }}>No transactions found.</p>
      ) : (
        <ul>
          {expenses.map((e) => (
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
