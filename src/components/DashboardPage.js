import React from 'react';
import TransactionSummary from './transactions/TransactionSummary';
import TransactionList from './transactions/TransactionList';

const DashboardPage = () => (
  <div>
    <TransactionSummary />
    <TransactionList  />
  </div>
);
export default DashboardPage;
