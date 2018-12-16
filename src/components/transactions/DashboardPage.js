import React from 'react';
import TransactionSummary from './TransactionSummary';
import TransactionList from './TransactionList';

const DashboardPage = () => (
  <div>
    <TransactionSummary />
    <TransactionList  />
  </div>
);
export default DashboardPage;
