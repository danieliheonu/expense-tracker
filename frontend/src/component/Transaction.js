import React from 'react'
import TransactionList from './TransactionList';

function Transaction({ transactions }) {

  return (
    <>
        <h3>History</h3>
        <ul className="list">
        {transactions.map(transaction => (
          <TransactionList key={transaction._id} transaction={transaction} />
        ))}
        
        </ul>
    </>
  )
}

export default Transaction