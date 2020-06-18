import React, { useContext } from 'react';
import { ExpenseItem } from './ExpenseItem';
import { Context } from '../context/appContext';

export const ExpenseList = () => {
  const { expenses, clearAll, showAlert } = useContext(Context);

  const clearItems = () => {
    clearAll();
    showAlert('Calculator cleared', 'success');
  };

  return (
    <>
      {expenses.length ? (
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
      ) : null}
    </>
  );
};
