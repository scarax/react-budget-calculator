import React, { useContext } from 'react';
import { Context } from '../context/appContext';

export const Alert = () => {
  const { alert, hideAlert } = useContext(Context);

  if (!alert.visible) {
    return null;
  }

  return (
    <div className={`alert alert--${alert.type || 'warning'}`}>
      {alert.text}
      <button className="close" aria-label="Close alert" onClick={hideAlert}>
        &times;
      </button>
    </div>
  );
};
