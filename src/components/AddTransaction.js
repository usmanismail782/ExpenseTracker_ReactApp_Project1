import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
export const AddTransaction = () => {

  const { AddTransaction } = useContext(GlobalContext)
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const onsubmit = e => {
    e.preventDefault()

    let newTransaction = {
      id: Math.random() * 10000,
      text,
      amount: +amount
    }

    AddTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onsubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"> Amount <br />
            (negative - expense, positive - income)
            </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn" >Add transaction</button>
      </form>
    </>
  )

}

