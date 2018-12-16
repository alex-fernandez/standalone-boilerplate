import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
class TransactionListItem extends Component {

    render() {
        return (
        <Link  className="list-item"  to={`/transactions/edit/${this.props.id}`}>
            <div>
                <h3 className="list-item__title">{this.props.transactionNumber}</h3>
                <span className="list-item__sub-title">
                    {this.props.notes || ''}
                </span>
                <br/>
                <span className="list-item__sub-title">{moment(this.props.transactionDate).format('MMMM Do, YYYY')}</span>
            </div>
            <div>
                <h3 className="list-item__amount">{numeral(this.props.amount).format('0,00.00')}</h3>
            </div>
        </Link>
        )
    }
}

export default TransactionListItem;