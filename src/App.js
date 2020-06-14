import React, { useState, useEffect } from "react";
import { Form } from "./components/Form";
import { ExpenseList } from "./components/ExpenseList";
import { Alert } from "./components/Alert";

function App() {
  const [expenses, setExpenses] = useState([
    { title: "Car rent", amount: 800, id: 1 },
    { title: "Birthday Gift", amount: 200, id: 2 },
    { title: "Party", amount: 2000, id: 3 },
  ]);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [editForm, setEditForm] = useState(false);
  const [editId, setEditId] = useState(0);

  useEffect(() => {
    const raw = localStorage.getItem("expenses") || JSON.stringify([]);
    setExpenses(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  function addExpense(charge, amount) {
    setExpenses([
      ...expenses,
      { title: charge, amount: Number(amount), id: Date.now() },
    ]);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    if (charge.trim() && amount > 0) {
      if (editForm) {
        setExpenses(
          expenses.map((item) => {
            return item.id === editId
              ? { ...item, title: charge, amount: Number(amount) }
              : item;
          })
        );
        setEditForm(false);
        handleAlert({ type: "success", text: "Item has been edited" });
      } else {
        addExpense(charge, amount);
        handleAlert({ type: "success", text: "Item has been added" });
      }
      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "warning",
        text: "Item can't be empty and amount has to be bigger than zero",
      });
    }
  }
  function clearAllItems() {
    setExpenses([]);
    handleAlert({ type: "success", text: "Calculator cleared" });
  }
  function removeItem(id) {
    setExpenses(expenses.filter((item) => item.id !== id));
    handleAlert({ text: "Item has been deleted" });
  }
  function editItem(id) {
    let { title, amount } = expenses.find((item) => item.id === id);
    setCharge(title);
    setAmount(amount);
    setEditForm(true);
    setEditId(id);
  }
  function handleAlert({ type, text }) {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 7000);
  }
  function hideAlert() {
    setAlert({ show: false });
  }

  return (
    <>
      <div className="container">
        {alert.show && (
          <Alert type={alert.type} text={alert.text} hideAlert={hideAlert} />
        )}
        <section className="app">
          <h1 className="title">Budget Calculator</h1>
          <Form
            handleSubmit={handleSubmit}
            charge={charge}
            amount={amount}
            setCharge={setCharge}
            setAmount={setAmount}
            editForm={editForm}
          />
          <ExpenseList
            expenses={expenses}
            clearAllItems={clearAllItems}
            removeItem={removeItem}
            editItem={editItem}
          />
          <h2 className="balance">
            Total Expense: $&nbsp;
            {expenses.reduce((total, expense) => {
              return total + expense.amount;
            }, 0)}
          </h2>
        </section>
      </div>
    </>
  );
}

export default App;
