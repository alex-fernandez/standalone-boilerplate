/* eslint-disable */
import React, {Component} from 'react';

class TransactionViewerToolbar extends Component {
    render() {
        return (
            <div className="ui grid">
                <div className="fourteen wide column"></div>
                    <div className="two wide column">
                        <div className="ui icon menu ui right floated">
                            <a href="#" className={'item ' + (this.props.activeView === 'list' ? 'active' : '')} 
                             onClick={(e) => {
                                 e.preventDefault();
                                 this.props.handleActiveViewClick('list')
                                 
                                 }} >
                                <i className="list ul icon"></i>
                            </a>
                            <a href="#" className={'item ' + (this.props.activeView === 'grid' ? 'active' : '')}
                             onClick={(e) => {
                                e.preventDefault();
                                 this.props.handleActiveViewClick('grid')}

                                 } >
                                <i className="th icon"></i>
                            </a>
                                
                    </div>
                </div>
            </div>
        )
    }

}

export default TransactionViewerToolbar;