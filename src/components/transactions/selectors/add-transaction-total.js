export default (transactions) => {
    return transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
}