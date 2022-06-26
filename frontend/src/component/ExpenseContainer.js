import React, { useContext } from 'react'
import TransactionContext from '../contexts/TransactionContext'

function ExpenseContainer() {

  const { income, expense } = useContext(TransactionContext)

  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">${expense}</p>
        </div>
    </div>
  )
}

export default ExpenseContainer