import React from 'react';
import { Form } from './components/Form';
import { ExpenseList } from './components/ExpenseList';
import { Alert } from './components/Alert';
import { Balance } from './components/Balance';
import { AlertState } from './context/alert/AlertState';
import { AppState } from './context/app/AppState';

function App() {
  return (
    <AppState>
      <AlertState>
        <div className="container">
          <Alert />
          <section className="app">
            <h1 className="title">Budget Calculator</h1>
            <Form />
            <ExpenseList />
            <Balance />
          </section>
        </div>
      </AlertState>
    </AppState>
  );
}

export default App;
