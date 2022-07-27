import { PieChart } from 'react-minimal-pie-chart';
import Transactions from '../Components/Transactions';
import { useState, useEffect } from 'react';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

function Index() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => {
        setTransactions(res.data);
        document.getElementById('spinner').className = 'invisible';
      })
      .catch((err) => {
        console.warn(err.message);
        document.getElementById('status').innerText = err.message;
        document.getElementById('spinner').className = 'invisible';
      });
  }, []);

  const spinner = (
    <div id="spinner" className="flex items-center justify-center">
      <div className="w-10 h-10 border-b-2 border-gray-900 rounded-full animate-spin"></div>
    </div>
  );

  let accountTotal = (
    <span id="balance">
      {transactions.reduce((acc, num) => {
        acc += Number(num.amount);
        return acc;
      }, 0)}
    </span>
  );

  let getColorForBalance = (accountTotal) => {
    if (accountTotal.props.children > 1000) {
      document.getElementById('balance').className = 'text-lime-700';
    } else if (accountTotal.props.children < 0) {
      document.getElementById('balance').className = 'text-red-600';
    }
    return accountTotal;
  };
console.log(transactions)
  return (
    <div>
      <h2 id="status" className="text-[50px] text-center">
        Bank Account Total: ${getColorForBalance(accountTotal)}
      </h2>
      {spinner}
      <Transactions transactions={transactions} />
      <PieChart
      className='text-[7px]'
      viewBoxSize={[350, 350]}
      center={[175,80]}
      label={({dataEntry}) =>
      dataEntry.title
      }
        data={transactions}
      />
      ;
    </div>
  );
}

export default Index;
