/* eslint-disable */
import React, {Component} from 'react';
import TransactionGridItem from './TransactionGridItem';

class TransactionGrid extends Component {
    state = {
        
    }

    render() {
        return (
          <div className="twelve wide column">
            <div className="ui three column grid">
            {this.props.transactions.map((transaction, index) => (
                <TransactionGridItem {...transaction} key={'transaction-' + transaction.id + '-' + index} />
            ))}
            </div>

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
          </div>  
        );
    }

}

export default TransactionGrid;