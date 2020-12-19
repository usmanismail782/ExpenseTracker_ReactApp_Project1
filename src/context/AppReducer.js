const AppReducer = ((state, action) => {


    switch (action.type) {

        case 'Delete_Transaction':
            return {

              
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)

            }

        case 'Add_Transaction':
         
            return {
             
                transactions: [action.payload, ...state.transactions]

            }


        default:
            return state;
    }
})

export default AppReducer;