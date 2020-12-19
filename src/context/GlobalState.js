import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const intialState = { transactions: [] }

export const GlobalContext = createContext(intialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, intialState);

    function DeleteTransaction(id) {

        dispatch({

            type: 'Delete_Transaction',
            payload: id

        })

    }

    function AddTransaction(transaction) {

        dispatch({

            type: 'Add_Transaction',
            payload: {

                id: transaction.id,
                amount: transaction.amount,
                text: transaction.text
            }

        })

    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        DeleteTransaction,
        AddTransaction

    }}>
        {children}
    </GlobalContext.Provider>
    );

}
