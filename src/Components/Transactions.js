import Transaction from './Transaction';

function Transactions({ transactions }) {
  return (
    <div className='pt-4'>
      {transactions.map((transaction, index) => {
        return (
          <Transaction key={index} transaction={transaction} index={index} />
        );
      })}
    </div>
  );
}

export default Transactions;
