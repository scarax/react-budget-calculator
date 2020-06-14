import React from "react";
import { ExpenseItem } from "./ExpenseItem";

export const ExpenseList = ({
  expenses,
  clearAllItems,
  removeItem,
  editItem,
}) => {
  return (
    <>
      {expenses.length ? (
        <>
          <ul className="list">
            {expenses.map((expense) => {
              return (
                <ExpenseItem
                  key={expense.id}
                  expense={expense}
                  removeItem={removeItem}
                  editItem={editItem}
                />
              );
            })}
          </ul>
          <button className="btn btn--accent" onClick={clearAllItems}>
            clear expenses
          </button>
        </>
      ) : null}
    </>
  );
};
