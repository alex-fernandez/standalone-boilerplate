import React, {Component} from 'react';
import TransactionForm from './TransactionForm';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {startAddTransaction}  from '../../actions/transaction';
class TransactionAdd extends Component {
    
    onSubmitAddForm = (transaction) => {
        this.props.startAddTransaction(transaction);
        this.props.history.push('/transactions');
    }
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Transaction</h1>
                    </div>
                </div>
                <div className="content-container">
                     <TransactionForm onFormSubmit={this.onSubmitAddForm} />
                 </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    startAddTransaction:  transaction => dispatch(startAddTransaction(transaction))
})

TransactionAdd.propsTypes = {
    startAddTransaction: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
}

export default connect(undefined, mapDispatchToProps)(TransactionAdd);