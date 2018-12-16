import React from 'react';
import { Route } from 'react-router-dom';
import TransactionsDashboard from '../components/transactions/DashboardPage';
import TransactionAdd from '../components/transactions/TransactionAdd';
import TransactionEdit from '../components/transactions/TransactionEdit';
const TransactionsRoute = ( router ) => ({
  render() {
    const {match, history} = router;
    console.log(match);
    return (
      <div>
        <Route exact path={`${router.match.url}/`} render= { (router) => ( 
            <TransactionsDashboard history={router.history} match={router.match} />) } />
        <Route  path={`${router.match.url}/create`} render= {(router) => ( <TransactionAdd  history={router.history} match={router.match} />) } />
        <Route  path={`${router.match.url}/edit/:id`} render= {(router) => ( <TransactionEdit  match={router.match}  />) } />
      </div>
    )
  } 
    
});

export default TransactionsRoute;