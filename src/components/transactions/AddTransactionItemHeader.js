import React from 'react';

const AddTransactionItemHeader = () => (
    <div className = "ui transaction--list-item">
        <div className="transaction--list-item-data">
            <div className="transaction--list-item-data__content" >
            <h3>Meta</h3>
             </div>
            <div className="transaction--list-item-data__amount" >
                <h3>Amount</h3>
            </div>
        </div>
        <div className="ui divider"></div>
    </div>
)

export default AddTransactionItemHeader;