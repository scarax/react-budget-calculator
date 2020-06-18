import React, { useContext } from 'react';
import { Context } from '../context/appContext';

export const ExpenseItem = ({ expense }) => {
  const { removeItem, showAlert } = useContext(Context);

  const deleteItem = () => {
    removeItem(expense.id);
    showAlert('Item has been deleted');
  };

  return (
    <li className="list-item">
      <strong>{expense.title}</strong>
      <span>$&nbsp;{expense.amount}</span>
      <div className="btn-group">
        <button
          className="btn btn--delete"
          aria-label="Delete"
          onClick={deleteItem}
        >
          &times;
        </button>
      </div>
    </li>
  );
};
