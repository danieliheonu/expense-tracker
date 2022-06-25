import React, { useState } from 'react'
import axios from 'axios'

function AddTransaction() {

  const [text, setText] = useState('')

  const [amount, setAmount] = useState('');

  const addExpense = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/v1/transactions", {item:text, amount:amount}, {'Content-Type':'application/json'})
    setText('');
    setAmount('')
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={addExpense}>
          <div className="form-control">
              <label htmlFor="text">Text</label>
              <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
          </div>
          <div className="form-control">
              <label htmlFor="amount">Amount (negative - expense, positive - income)</label>
              <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
          </div>
          <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction