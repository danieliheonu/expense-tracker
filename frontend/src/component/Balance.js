import React, { useContext } from 'react'
import TransactionContext from '../contexts/TransactionContext'

function Balance() {

  const { total } = useContext(TransactionContext)

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  )
}

export default Balance