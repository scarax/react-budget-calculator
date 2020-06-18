import React, { useContext } from 'react';
import { Context } from '../context/appContext';

export const Balance = () => {
  const { expenses } = useContext(Context);
  return (
    <>
      <h2 className="balance">
        Total Expense: $&nbsp;
        {expenses.reduce((total, expense) => total + expense.amount, 0)}
      </h2>
    </>
  );
};
