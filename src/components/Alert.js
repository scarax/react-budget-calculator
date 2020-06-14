import React from "react";

export const Alert = ({ type, text, hideAlert }) => {
  return (
    <div className={`alert alert--${type || "warning"}`}>
      {text}
      <button className="close" aria-label="Close alert" onClick={hideAlert}>
        &times;
      </button>
    </div>
  );
};
