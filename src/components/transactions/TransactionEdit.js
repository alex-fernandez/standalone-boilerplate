import React, {Component} from 'react';
import TransactionForm from './TransactionForm';
import { withRouter } from 'react-router-dom';
import {startEditTransaction, startLoadTransaction, getTransaction } from '../../actions/transaction';
import {connect} from 'react-redux';
import {apiConfig} from '../../config/config';

class TransactionEdit extends Component {
  
  constructor(props) {
    super(props);  
    this.state = {
      transaction: null
    }

   

  }

  componentWillReceiveProps(nextProps) {
    //this.setState(() => { transaction: nextProps.transaction });
  }

  onFormSubmit = (transaction) => {
    const transactionId = this.props.match.params.id;
    this.props.startEditTransaction(transactionId, transaction);
  }

  componentDidMount = () => {
    const transactionId = this.props.match.params.id;
    const that = this;
    if (!this.props.transaction || 
      (this.props.transaction != null &&  
        this.props.transaction.id != transactionId)) {
      
      }
      const dispatch = this.props.dispatch;
      fetch(
        `${apiConfig.apiURL}/api/transactions/${transactionId}`
      )
      .then(res => res.json())
      .then(transaction => {
        this.setState(() => ({ transaction }))
        dispatch(getTransaction(transaction));
      })
      .catch(error => 
          dispatch({type: 'FETCH_TRANSACTION_ERROR', error})
      );
  }
  

  render() {
    return (
      <div>
        <div className="page-header">
           <div className="content-container">
              <h1 className="page-header__title">Edit Transaction</h1>
            </div>
        </div>
        <div className="content-container">
        {this.state.transaction && <TransactionForm transaction={this.state.transaction}  onFormSubmit={this.onFormSubmit} />}
        </div>
    </div>
        )
    }
}

const mapStateToProps = (state, props) => {
  const transaction = state.transaction.activeTransaction.transaction;
  return { 
    transaction
  };
}
const mapDispatchToProps = (dispatch) => ({
  startEditTransaction: (id, transaction) => dispatch(startEditTransaction(id, transaction)),
  startLoadTransaction: (id) => dispatch(startLoadTransaction(id)),
  dispatch

});

export default ((connect(mapStateToProps, mapDispatchToProps)(TransactionEdit)));