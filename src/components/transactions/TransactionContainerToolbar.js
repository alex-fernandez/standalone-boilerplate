import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TransactionContainerToolbar extends Component {

    render() {
        return (
            <div className="ui grid">
                <div className="twelve wide column">
                </div>
                <div className="four wide column">
                     <Link className="ui primary button right floated " to={`/transactions/add`}>New Batch Transaction</Link>
                </div>
            </div>
        );
    }
}

export default TransactionContainerToolbar;