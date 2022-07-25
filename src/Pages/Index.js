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
  }, [transactions]);
  return (
    <div>
      <h2 className="text-[50px] text-center">
        Bank Account Total: ${transactions.reduce((acc, num) => {
            return acc += num.amount
        }, 0 )}
      </h2>
      <Transactions transactions={transactions} />
    </div>
  );
}

export default Index;
