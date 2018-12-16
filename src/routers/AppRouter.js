import React from 'react';
import {  Route, Switch, Router } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import PublicRoute from './PublicRoute';
import TransactionsRoute from './TransactionsRoute';
import TransactionEdit from '../components/transactions/TransactionEdit';
import TransactionAdd from '../components/transactions/TransactionAdd';

import {history} from '../store/history';

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={DashboardPage} exact={true} isAuthenticated={true} />
        <PublicRoute path="/transactions" component={DashboardPage} exact={true} isAuthenticated={true} />
        <PublicRoute  path={`/transactions/create`} component={TransactionAdd}  />
        <PublicRoute  path='/transactions/edit/:id' component={TransactionEdit}   />) } />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
