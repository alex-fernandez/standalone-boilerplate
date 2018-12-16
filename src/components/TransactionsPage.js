import React, {Component} from 'react';
import TransactionListContainer from './transactions/TransactionListContainer';

class TransactionsPage extends Component {
   
    render() {
        return (
            <div>
               <TransactionListContainer  onFormSubmit={this.onSubmitAddForm} />
            </div>
        );
    }
}

export default TransactionsPage;