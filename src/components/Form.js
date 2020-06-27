import React, { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { AppContext } from '../context/app/appContext';

export const Form = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const { showAlert } = useContext(AlertContext);
  const { addExpense } = useContext(AppContext);

  const submitHandler = (evt) => {
    evt.preventDefault();
    const newExpense = {
      id: Date.now(),
      title: text,
      amount: Number(amount),
    };

    if (text.trim() && amount > 0) {
      addExpense(newExpense);
      showAlert('Item has been created', 'success');
      setText('');
      setAmount('');
    } else {
      showAlert("Item can't be empty and amount has to be bigger than zero");
    }
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="form-center">
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter text"
            value={text}
            onChange={(evt) => setText(evt.target.value)}
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
      <button className="btn btn--accent">Submit</button>
    </form>
  );
};
