import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Alert = () => {
  const { alert, hideAlert } = useContext(AlertContext);

  // if (!alert.visible) {
  //   return null;
  // }

  return alert.visible ? (
    <div className={`alert alert--${alert.type || 'warning'}`}>
      {alert.text}
      <button className="close" aria-label="Close alert" onClick={hideAlert}>
        &times;
      </button>
    </div>
  ) : null;
};
