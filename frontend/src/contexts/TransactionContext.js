import { createContext, useState } from "react";

const TransactionContext = createContext()

export function TransactionContextProvider({ children }){

    const [transactions, setTransactions] = useState([]);

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

    const [text, setText] = useState('')

    const [amount, setAmount] = useState('');

    return (
        <TransactionContext.Provider value={{ transactions, setTransactions, amounts, total, income, expense, text, setText, amount, setAmount }}>
            { children }
        </TransactionContext.Provider>
    )
}

export default TransactionContext;