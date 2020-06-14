import React from "react";

export const Form = ({
  charge,
  amount,
  setCharge,
  setAmount,
  handleSubmit,
  editForm,
}) => {
  const classes = ["btn"];
  editForm ? classes.push("btn--edit") : classes.push("btn--accent");

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter text"
            value={charge}
            onChange={(evt) => setCharge(evt.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter amount"
            value={amount}
            onChange={(evt) => setAmount(evt.target.value)}
          />
        </div>
      </div>
      <button className={classes.join(" ")}>
        {editForm ? "Edit" : "Submit"}
      </button>
    </form>
  );
};
