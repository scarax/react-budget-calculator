import React, { useReducer } from 'react';
import appReducer from './appReducer';
import { AppContext } from './appContext';

const initialState = {
  expenses: [
    { title: 'Car rent', amount: 800, id: 1 },
    { title: 'Birthday Gift', amount: 200, id: 2 },
    { title: 'Party', amount: 2000, id: 3 },
  ],
};

export const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Actions
  const addExpense = (expense) => {
    dispatch({ type: 'ADD_EXPENSE', payload: expense });
  };
  const removeExpense = (id) => {
    dispatch({
      type: 'REMOVE_EXPENSE',
      payload: id,
    });
  };
  const clearAll = () => dispatch({ type: 'CLEAR_ALL' });

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        addExpense,
        removeExpense,
        clearAll,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
