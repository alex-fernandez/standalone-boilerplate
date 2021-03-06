import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class TransactionSummary extends React.Component {

   render() {
       return (
        <div className="page-header">
        <div className="content-container">
           <h1 className="page-header__title">
              Viewing <span>5</span> expenses totalling <span>$411.00</span>
           </h1>
           <div className="page-header__actions">
              <Link className="button" to={'/transactions/create'}>Add Transaction</Link>
           </div>
        </div>
     </div>
       );
   }
}

export default TransactionSummary;