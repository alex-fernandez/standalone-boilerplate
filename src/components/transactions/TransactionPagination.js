/* eslint-disable */
import React, {Component} from 'react';

class TransactionPagination extends Component {
    
    render() {
        return (
            <div className="ui two column centered grid">
                <div className="column">
                    <div className="ui pagination menu " style={{marginTop: '2em'}}>
                            <a href="#" className="item">1</a>
                            <a href="#" className="item">2</a>
                            <a href="#" className="item">3</a>
                            <a href="#" className="item">4</a>
                            <a href="#" className="item">5</a>
                            <a href="#" className="item">6</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default TransactionPagination;