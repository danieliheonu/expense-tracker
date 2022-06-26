import React, { useState, useEffect } from 'react'
import AddTransaction from './AddTransaction'
import Balance from './Balance'
import ExpenseContainer from './ExpenseContainer'
import Transaction from './Transaction'
import axios from 'axios'

const ExpenseBody = () => {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    try {
      axios.get("http://localhost:5000/api/v1/transactions")
        .then((res) => setTransactions(res.data.data));
    }catch (err) {
      console.log(err)
    }
  },[transactions])

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2)


  return (
    <div className='container'>
        <Balance total={total}/>
        <ExpenseContainer income={income} expense={expense}/>
        <Transaction transactions={transactions}/>
        <AddTransaction transactions={transactions} setTransactions={setTransactions} />
    </div>
  )
}

export default ExpenseBody