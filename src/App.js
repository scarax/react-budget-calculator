import React from 'react';
import { Form } from './components/Form';
import { ExpenseList } from './components/ExpenseList';
import { Alert } from './components/Alert';
import { Balance } from './components/Balance';
import { GlobalState } from './context/GlobalState';

function App() {
  return (
    <GlobalState>
      <div className="container">
        <Alert />
        <section className="app">
          <h1 className="title">Budget Calculator</h1>
          <Form />
          <ExpenseList />
          <Balance />
        </section>
      </div>
    </GlobalState>
  );
}

export default App;
