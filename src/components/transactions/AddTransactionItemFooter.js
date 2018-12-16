import React from 'react';
import sumTransactions from './selectors/add-transaction-total';
import numeral from 'numeral';

const AddTransactionItemFooter = (props) => {

    const formattendTotalTransacrionsTotal = numeral(sumTransactions(props.transactions)).format('000.00');
    return (
        <div className = "ui transaction--list-item">
            <div className="transaction--list-item-data">
                <div className="transaction--list-item-data__content" >
                <h3>Total</h3>
                </div>
                <div className="transaction--list-item-data__amount" >
                    <h3>{formattendTotalTransacrionsTotal}</h3>
                </div>
            </div>
        </div>
    );
}
export default AddTransactionItemFooter;