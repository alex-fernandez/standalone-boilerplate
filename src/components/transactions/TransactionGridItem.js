/* eslint-disable */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class TransactionGridTem extends Component {

    render() {
        return (
            <div className="column">
                <div className="ui fluid card">
                    <div className="content">
                    <Link className='header' to={`/transactions/${this.props.id}`}>{ this.props.name }</Link>
                    <div className="meta">
                        <span className="cinema">Amount</span>
                        <span className="cinema">{this.props.amount}</span>
                    </div>
                    <div className="extra">
                        {
                            this.props.tags.map((tag, id)=> (
                                <div className="ui label" key={'tag-' + id}>{tag}</div>
                            ))
                        }
                    </div>
                    
                </div>
            </div>
            </div>
        );
    }

}

export default TransactionGridTem;