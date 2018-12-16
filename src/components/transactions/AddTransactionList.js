import React from 'react';
import AddTransactionListItem from './AddTransactionListItem';
import AddTransactionItemHeader from './AddTransactionItemHeader';
import AddTransactionItemFooter from './AddTransactionItemFooter';

class AddTransactionList extends React.Component {


    onHandleSelectedTransaction = () => {

    }

    onHandleDeleteTansaction = (transaction) => {
            
    }

    render() {
        return (
            <div className='transaction-list'> 
                <AddTransactionItemHeader />
                {
                    this.props.transactions.map((transaction, index) => (
                        <AddTransactionListItem
                            transaction={transaction}  
                            key={'transaction-' + transaction.id + '-' + index} 
                            onHandleSelectedTransaction={this.onHandleSelectedTransaction} 
                            onHandleDeleteTansaction={this.onHandleDeleteTansaction}
                        />
                    ))
                }
                <AddTransactionItemFooter transactions={this.props.transactions} />
            </div>

        )
    }
}

export default AddTransactionList;