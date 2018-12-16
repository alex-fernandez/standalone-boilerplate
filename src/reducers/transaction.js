
const initialState = {
    transactionList: { transactionSearch: null, error : null, loading: false },
    activeTransaction: { transaction: null, loading: false,  error: null   }
}
export default function transaction(state = initialState, action) {
   switch(action.type) {
     case 'FETCH_TRANSACTIONS_BEGIN':
       return {
           ...state,
            transactionList: { transactionSearch: null, error: null, loading: true },
        };
        case 'FETCH_TRANSACTIONS_SUCCESS':
          return {
             ...state,
              transactionList: { transactionSearch: action.payload.response, error: null, loading: false },
        };
        case 'FETCH_TRANSACTIONS_FAILURE':
          return {
             ...state,
              transactionList: { transactionSearch: null, error: action.payload.error, loading: false },
        };
        case 'FETCH_TRANSACTION_START':
            return { ...state, activeTransaction:{...state.activeTransaction, loading: true}};
        case 'FETCH_TRANSACTION_SUCCESS':
          return {
            ...state,
            activeTransaction: {transaction: action.payload.transaction, error: null, loading: false }
          }
        case 'FETCH_TRANSACTION_FAILURE':
          return {
            ...state,
            activeTransaction: { transaction: action.payload.error, error: null, loading: false }
          }
        default: 
            return state;

    }
}