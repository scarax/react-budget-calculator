import React, { useReducer, useEffect } from 'react';
import appReducer from './appReducer';
import { AppContext } from './appContext';

const initialState = {
  expenses: JSON.parse(
    localStorage.getItem('expenses') ||
      JSON.stringify([
        // or leave it blank
        { title: 'Car rent', amount: 800, id: 1 },
        { title: 'Birthday Gift', amount: 200, id: 2 },
        { title: 'Party', amount: 2000, id: 3 },
      ])
  ),
  editing: false,
  editItem: null,
};

export const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(state.expenses));
  }, [state.expenses]);

  // Actions
  const addExpense = (expense) => {
    dispatch({ type: 'ADD_EXPENSE', payload: expense });
  };
  const findExpense = (id) => {
    dispatch({ type: 'FIND_EXPENSE', payload: id });
  };
  const editExpense = (expense) => {
    dispatch({ type: 'EDIT_EXPENSE', payload: expense });
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
        findExpense,
        editExpense,
        removeExpense,
        clearAll,
        editing: state.editing,
        editItem: state.editItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
