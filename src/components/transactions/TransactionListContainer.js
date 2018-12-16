import React, {Component} from 'react';
import TransactionContainerToolbar from './TransactionContainerToolbar';
import TransactionGrid from './TransactionGrid';
import TransactionList from './TransactionList';
import TransactionSidebar from './TransactionSidebar';
import TransactionViewerToolbar from './TransactionViewerToolbar';
import transactions from './transactions.json';

class TransactionListContainer extends Component {

    constructor (props) {
        super(props);
        this.state = {
            activeView: 'list'
        }
    }
   
    handleActiveViewClick = (activeView) => {
        this.setState(() => ({
            activeView
         }
        ));
    }
    render() {
        return (
            <div style={{marginTop: '7em'}}>
                <TransactionContainerToolbar  />
                <TransactionViewerToolbar activeView={this.state.activeView} handleActiveViewClick={this.handleActiveViewClick} />
                <div className="ui grid" style={{marginTop: '2em'}}>
                    <div className='row'>
                        <TransactionSidebar />
                        {this.state.activeView === 'grid' &&  <TransactionGrid transactions={transactions} />}
                        {this.state.activeView === 'list' &&  <TransactionList transactions={transactions} />}
                    </div>
                </div>
            </div>
        );
    }

}

export default TransactionListContainer;