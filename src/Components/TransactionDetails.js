import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

function TransactionDetails() {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => {
        setTransaction(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [transaction, index]);
  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => {
        alert("We've deleted your transaction.");
        navigate('/transactions');
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  return (
    <div>

        <article className='px-[20%]'>
        <h1 className="border-t text-[30px]">Name: {transaction.item_name}</h1>
        <h3 className='text-[30px]'>Amount: ${transaction.amount}</h3>
        <h3 className='text-[20px]'>Recorded on: {transaction.date}</h3>
            <h3 className='text-[20px]'>Category: {transaction.category}</h3>
            <p className='border-b text-[20px]'>From: {transaction.from}</p>
        </article>
      <div className="px-[20%] flex flex-row justify-evenly p-4">
        <div>
          {' '}
          <Link to={`/transactions`}>
            <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Back
            </button>
          </Link>
        </div>
        <div>
          {' '}
          <Link to={`/transactions/${index}/edit`}>
            <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Edit
            </button>
          </Link>
        </div>
        <div>
          {' '}
          <button
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransactionDetails;
