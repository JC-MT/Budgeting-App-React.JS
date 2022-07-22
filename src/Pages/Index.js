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
        console.log(res.data);
        setTransactions(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h2 className="text-[50px] text-center">
        Bank Account Total: ${transactions.map((transaction) => {
            let total = 0
            total += transaction.amount
            return total 
        })}
      </h2>
      <Transactions transactions={transactions} />
    </div>
  );
}

export default Index;