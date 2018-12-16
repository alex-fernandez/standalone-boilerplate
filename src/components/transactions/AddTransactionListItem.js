import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';

class AddTransactionListItem extends React.Component {

    handleOnClickRemove = (e) => {
        e.preventDefault();
       if (this.props.onHandleDeleteTansaction) {
           this.props.onHandleDeleteTansaction(this.props.transaction);
       }
    }
    render() {
        const props = this.props;
        return (
            <div className = "ui transaction--list-item">
            <div className="transaction--list-item-data">
                <div className="transaction--list-item-data__content">
                    <h4 className='header'><Link to={`/transactions/${props.transaction.id}`}> { props.transaction.name }</Link></h4>
                    <p>{ moment(props.transaction.transactionDate).format('MMMM Do, YYYY')}</p>
                    <div className='transaction--list-item-data__meta attached segment'>
                        <div className="ui grid">
                            <div className="eight wide column">
                               { props.transaction.tags != null && props.transaction.tags.map((tag) => (
                                    <span key={tag} className="ui label">{tag}</span>
                               )) }
                            </div>
                            <div className="eight wide column">
                                { props.transaction.categoryIds != null && props.transaction.categoryIds.map((categoryId) => (
                                    <span key={categoryId} className="ui label">{categoryId}</span>
                               )) }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transaction--list-item-data__amount" >
                    <h3>{props.transaction.amount}</h3>
                    <div>
                        <button className="small ui negative basic button" onClick={this.handleOnClickRemove}>Remove</button>
                    </div>
                </div>
            </div>
            <div className="ui divider"></div>
        </div>
        );
    }
}

export default AddTransactionListItem;