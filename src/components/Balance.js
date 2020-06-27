import React, { useContext } from 'react';
import { AppContext } from '../context/app/appContext';

export const Balance = () => {
  const { expenses } = useContext(AppContext);

  return (
    <h2 className="balance">
      Total Expense: $&nbsp;
      {expenses.reduce((total, expense) => total + expense.amount, 0)}
    </h2>
  );
};
