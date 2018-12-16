import React, {Component} from 'react';
import TransactionListItem from './TransactionListItem';
import TransactionPagination from './TransactionPagination';
import {fetchTransactions} from '../../actions/transaction';
import { connect } from 'react-redux';
class TransactionList extends Component {
   
  componentDidMount() {
    this.props.dispatch(fetchTransactions());
  }

  checkIfValidTransaction = (transactionList) => {
    return (transactionList.transactionSearch != null && 
      transactionList.transactionSearch.results != null) && 
      transactionList.transactionSearch.results.length > 0
  }


   render() {
     return (
       <div className="content-container">
        <div className="list-header">
          <div className="show-for-mobile">Expenses</div>
          <div className="show-for-desktop">Expense</div>
          <div className="show-for-desktop">Amount</div>
            </div>
            <div className="list-body">
            {
              (this.checkIfValidTransaction(this.props.transactionList) ? (
                  this.props.transactionList.transactionSearch.results.map((transaction, index) => (
                        <TransactionListItem {...transaction} key={'transaction-' + transaction.id + '-' + index} />
                    )
               )) : (
                 <div className="list-item list-item--message">
                   <span>No Transaction</span>
                 </div>
                )
              )
           }
            </div>
       </div>)
    }

}
const mapStateToProps = state => ({
    transactionList: state.transaction.transactionList
})
export default connect(mapStateToProps)(TransactionList);
