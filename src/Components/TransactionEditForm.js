import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

function TransactionEditForm() {
  let { index } = useParams();
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    item_name: '',
    amount: 0,
    date: '',
    from: '',
    category: ''
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => {
        setTransaction(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/transactions/${index}`, transaction)
      .then(() => {
        alert("We've updated your transaction.");
        navigate(`/transactions/${index}`);
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  return (
    <>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-2">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div>
          <div className="mt-5 md:mt-0 px-[20%]">
            <form>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div class="datepicker relative form-floating mb-3 xl:w-96">
                      <label
                        htmlFor="date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date
                      </label>
                      <input
                        type="text"
                        value={transaction.date}
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="MM/DD/YYYY"
                        name="date"
                        onChange={handleTextChange}
                      />
                    </div>
                    <div className="row-start-2 ">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        value={transaction.item_name}
                        name="item_name"
                        className="p-2 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={handleTextChange}
                      />
                    </div>

                    <div className="row-start-3">
                      <label
                        htmlFor="amount"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Amount
                      </label>
                      <input
                        type="number"
                        value={transaction.amount}
                        name="amount"
                        placeholder="-300 or 300"
                        className="p-2 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={handleTextChange}
                      />
                    </div>

                    <div className="row-start-4">
                      <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Category
                      </label>
                      <input
                        id="category"
                        value={transaction.category}
                        name="category"
                        onChange={handleTextChange}
                        placeholder="Income, Taxes, Groceries..."
                        className="p-2 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="row-start-5 col-span-2">
                      <label
                        htmlFor="from"
                        className="block text-sm font-medium text-gray-700"
                      >
                        From
                      </label>
                      <input
                        type="text"
                        value={transaction.from}
                        name="from"
                        placeholder="Include any important details"
                        className="p-2 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={handleTextChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <Link to={`/transactions`}>
                    <button className="p-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Back
                    </button>
                  </Link>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={handleSubmit}
                  >
                    UPDATE ITEM
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionEditForm;
