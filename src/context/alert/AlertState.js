import React, { useReducer } from 'react';
import { AlertContext } from './alertContext';
import alertReducer from './alertReducer';

const initialState = {
  visible: false,
};

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Actions
  const showAlert = (text, type) => {
    dispatch({
      type: 'SHOW_ALERT',
      payload: { text, type },
    });
    setTimeout(hideAlert, 3000);
  };
  const hideAlert = () => {
    dispatch({ type: 'HIDE_ALERT' });
  };

  // Provider
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        showAlert,
        hideAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
