import React, { useEffect, useContext } from 'react'
import AddTransaction from './AddTransaction'
import Balance from './Balance'
import ExpenseContainer from './ExpenseContainer'
import Transaction from './Transaction'
import axios from 'axios'
import TransactionContext from '../contexts/TransactionContext'

const ExpenseBody = () => {

  const { transactions, setTransactions } = useContext(TransactionContext)

  useEffect(() => {
    try {
      axios.get("http://localhost:5000/api/v1/transactions")
        .then((res) => setTransactions(res.data.data));
    }catch (err) {
      console.log(err)
    }
  },[transactions])

  return (
    <div className='container'>
        <Balance />
        <ExpenseContainer />
        <Transaction />
        <AddTransaction />
    </div>
  )
}

export default ExpenseBody