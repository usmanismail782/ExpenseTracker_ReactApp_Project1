import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {

    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)
    let balance = amounts.reduce((total, currentValue) => total = total + currentValue, 0);
    let sign = balance < 0 ? '-' : '';


    return (
        <>

            <h4> Your Balance </h4>
            <h1>{sign}${Math.abs(balance)}</h1>
        </>
    )

}

