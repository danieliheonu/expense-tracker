import React from 'react'
import axios from 'axios'

function TransactionList({ transaction }) {

  const deleteTransaction = (id) => {
    axios.delete(`http://localhost:5000/api/v1/transactions/${id}`)
    window.location.href = '/'
  }

  return (
    <>
    <li className={transaction.amount > 0 ? 'plus':'minus'}>
        {transaction.item} <span>{transaction.amount > 0 ? '':'-'}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
    </li>
    </>
  )
}

export default TransactionList