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
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  const bankTotal = (transactions) => {
    let total = transactions.reduce(function (acc, num) {
      acc += Number(num.amount);
      return acc;
    }, 0);
    return total
  };

  return (
    <div>
      <h2 className="text-[50px] text-center">
        Bank Account Total: ${bankTotal(transactions)}
      </h2>
      <Transactions transactions={transactions} />
    </div>
  );
}

export default Index;
