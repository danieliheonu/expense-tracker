import React from 'react';
import Header from './component/Header';
import ExpenseBody from './component/ExpenseBody';
import { TransactionContextProvider } from './contexts/TransactionContext'

function App() {
    
  return (
    <TransactionContextProvider>
      <Header />
      <ExpenseBody />
    </TransactionContextProvider>
  );
}

export default App;