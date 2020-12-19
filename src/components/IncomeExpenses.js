import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const IncomeExpenses = () =>{

  const {transactions} = useContext(GlobalContext)
    let expenses = transactions.map(transaction => transaction.amount < 0 ? transaction.amount : 0)
    let incomes = transactions.map(transaction => transaction.amount < 0 ? 0 : transaction.amount )
    let totalExpense  = expenses.reduce((total, currentValue) => total = total + currentValue,0);
    let totalIncome  = incomes.reduce((total, currentValue) => total = total + currentValue,0);

    return(
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p  className="money plus">${Math.abs(totalIncome)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">${Math.abs(totalExpense)}</p>
        </div>
      </div>
 
          )

}

