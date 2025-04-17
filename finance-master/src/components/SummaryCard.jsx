import React from "react";

function SummaryCards() {
  const income = 20000;
  const expenses = 7500;
  const savings = income - expenses;

  const data = [
    { label: "Income", amount: income, color: "#00c853" },
    { label: "Expenses", amount: expenses, color: "#d50000" },
    { label: "Savings", amount: savings, color: "#2962ff" },
  ];

  return (
    <div className="summary-cards">
      {data.map((item) => (
        <div className="card" key={item.label} style={{ borderColor: item.color }}>
          <h3>{item.label}</h3>
          <p style={{ color: item.color }}>KES {item.amount.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;
