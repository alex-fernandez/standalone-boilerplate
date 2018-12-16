export const FETCH_TRANSACTIONS_BEGIN = 'FETCH_TRANSACTIONS_BEGIN';
export const FETCH_TRANSACTIONS_SUCCESS = 'FETCH_TRANSACTIONS_SUCCESS';
export const FETCH_TRANSACTIONS_FAILURE = 'FETCH_TRANSACTIONS_FAILURE';
import {apiConfig} from '../config/config';
import { history } from '../store/history'

export const fetchTransactionsBegin = () => ({
    type: FETCH_TRANSACTIONS_BEGIN
})

export const fetchTransactionsSuccess = (response) => ({
    type: FETCH_TRANSACTIONS_SUCCESS,
    payload: { response }
});

export const fetchTransactionsError = (error) => ({
    type: FETCH_TRANSACTION_FAILURE,
    payload: { error }
})

export const fetchTransactions = () => {
    return dispatch => {
        dispatch(fetchTransactionsBegin());
        return fetch(`${apiConfig.apiURL}/api/transactions/search`)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchTransactionsSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchTransactionsError(error)));
    }
}

export const addTransaction = (transaction) => ({
    type: 'ADD_TRANSACTION',
    transaction
});

const getHeaders = () => {
    return {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
   }
}
export const startAddTransaction = (transactionData = {}) => {
    const {
        notes = '',
        amount= 0.0,
        transactionDate = 0,
        transactionNumber = ''
    } = transactionData;
    return (dispatch, getState) => {
        const transaction = {
            notes,
            amount,
            transactionNumber,
            transactionDate
        };
        dispatch({type: 'ADD_TRANSACTION_BEGIN'});
        const request = JSON.stringify(transaction);
        return fetch(
            `${apiConfig.apiURL}/api/transactions`,
            {
                method: 'POST', 
                body: request,
                headers: getHeaders()
            }
        ).then(handleErrors)
        .then(res => res.json())
        .then(json => {
            dispatch(addTransaction(json));
            history.push("/transactions");
            return json;
        })
        .catch(error => 
            dispatch({
                type: 'ADD_TRANSACTION_ERROR',
                error
            })
        );
    }
}

export const removeTransaction = ({id} = {}) => ({
    type: 'REMOVE_TRANSACTION',
    id
});

export const editTransaction = (id, updates) => ({
    type: 'EDIT_TRANSACTION',
    id,
    updates
});

export const getTransaction =  (transaction) => ({
    type: 'FETCH_TRANSACTION_SUCCESS',
    payload: { transaction }
})



export const startEditTransaction = (id, updates) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'EDIT_TRANSACTION_START'
        });

       return fetch(
        `${apiConfig.apiURL}/api/transactions/${id}`,
        {
            method: 'PUT', 
            body: JSON.stringify(updates),
            headers: getHeaders()
        }
    ).then(handleErrors)
    .then(res => res.json())
    .then(json => {
        dispatch(editTransaction(id, json));
        history.push("/transactions");
    })
    .catch(error => 
        dispatch({
            type: 'EDIT_TRANSACTION_ERROR',
            error
        })
    );
    }
}


export const startLoadTransaction = (id) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'FETCH_TRANSACTION_START'
        });
       return fetch(
        `${apiConfig.apiURL}/api/transactions/${id}`
    ).then(handleErrors)
    .then(res => res.json())
    .then(json => {
        dispatch(getTransaction(json));
    })
    .catch(error => 
        dispatch({
            type: 'FETCH_TRANSACTION_ERROR',
            error
        })
    );
    }
}


function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}