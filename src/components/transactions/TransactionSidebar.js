/* eslint-disable */
import React, {Component} from 'react';

class TransactionSidebar extends Component {

    render() {
        return (
            <div className="four wide column">
                <div className="row">
                    <div className="ui fluid icon input">
                    <input type="text" placeholder="Search" />
                    <i className="search icon"></i>
                    </div>
                </div>
                <div className="ui divider"> </div>
                <div className="row">
                    <button className="ui right floated button">Apply Search</button>
                </div>
            </div>
        )
    }
}

export default TransactionSidebar;