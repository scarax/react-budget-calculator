import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { AppContext } from '../context/app/appContext';

export const ExpenseItem = ({ expense }) => {
  const { showAlert } = useContext(AlertContext);
  const { findExpense, removeExpense } = useContext(AppContext);

  const deleteItem = () => {
    removeExpense(expense.id);
    showAlert('Item has been deleted');
  };

  return (
    <li className="list-item">
      <strong>{expense.title}</strong>
      <span>$&nbsp;{expense.amount}</span>
      <div className="btn-group">
        <button
          className="btn btn--edit"
          aria-label="Edit item"
          onClick={() => findExpense(expense.id)}
        >
          Edit
        </button>
        <button
          className="btn btn--delete"
          aria-label="Delete item"
          onClick={deleteItem}
        >
          &times;
        </button>
      </div>
    </li>
  );
};
