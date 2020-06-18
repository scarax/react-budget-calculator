import React, { useReducer } from 'react';
import { Context } from './appContext';
import AppReducer from './AppReducer';

const initialState = {
  expenses: [
    { title: 'Car rent', amount: 800, id: 1 },
    { title: 'Birthday Gift', amount: 200, id: 2 },
    { title: 'Party', amount: 2000, id: 3 },
  ],
  alert: { visible: false },
};

export const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const showAlert = (text, type) => {
    dispatch({
      type: 'SHOW_ALERT',
      payload: { text, type },
    });
    setTimeout(() => {
      hideAlert({ type: 'HIDE_ALERT' });
    }, 7000);
  };
  const hideAlert = () => dispatch({ type: 'HIDE_ALERT' });

  const addExpense = (expense) => {
    dispatch({ type: 'ADD_EXPENSE', payload: expense });
  };
  const removeItem = (id) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id,
    });
  };
  const clearAll = () => dispatch({ type: 'CLEAR_ALL' });

  // Provider
  return (
    <Context.Provider
      value={{
        expenses: state.expenses,
        addExpense,
        removeItem,
        clearAll,
        alert: state.alert,
        showAlert,
        hideAlert,
      }}
    >
      {children}
    </Context.Provider>
  );
};
