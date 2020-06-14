import React from "react";

export const ExpenseItem = ({ expense, removeItem, editItem }) => {
  return (
    <li className="list-item">
      <strong>{expense.title}</strong>
      <span>$&nbsp;{expense.amount}</span>
      <div className="btn-group">
        <button className="btn btn--edit" onClick={() => editItem(expense.id)}>
          Edit
        </button>
        <button
          className="btn btn--delete"
          aria-label="Delete"
          onClick={() => removeItem(expense.id)}
        >
          &times;
        </button>
      </div>
    </li>
  );
};
