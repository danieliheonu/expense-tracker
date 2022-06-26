import React, { useContext } from 'react'
import TransactionList from './TransactionList';
import TransactionContext from '../contexts/TransactionContext';

function Transaction() {

  const { transactions } = useContext(TransactionContext)

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