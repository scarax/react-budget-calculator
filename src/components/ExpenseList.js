import React, { useContext } from 'react';
import { ExpenseItem } from './ExpenseItem';
import { AlertContext } from '../context/alert/alertContext';
import { AppContext } from '../context/app/appContext';

export const ExpenseList = () => {
  const { showAlert } = useContext(AlertContext);
  const { expenses, clearAll } = useContext(AppContext);

  const clearItems = () => {
    clearAll();
    showAlert('Calculator has been cleared', 'success');
  };

  return expenses.length ? (
    <>
      <ul className="list">
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </ul>
      <button className="btn btn--accent" onClick={clearItems}>
        clear expenses
      </button>
    </>
  ) : null;
};
