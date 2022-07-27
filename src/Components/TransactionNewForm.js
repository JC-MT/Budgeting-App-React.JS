import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const API = process.env.REACT_APP_API_URL

function TransactionNewForm() {
  const navigate = useNavigate()
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const handleTextChange = (event) => {
    console.log(transaction)
    setTransaction({ ...transaction, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${API}/transactions`, transaction)
    .then(() => {
      alert("We've added your new transaction.")
      navigate("/transactions")
    })
    .catch((err) => {
      console.warn(err)
    })
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
                  <div className="grid gap-2 sm:gap-4">
                      <div class="datepicker relative form-floating mb-3">
                        <label
                          htmlFor="date"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Date
                        </label>
                        <input
                          type="date"
                          class="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="MM/DD/YYYY"
                          name="date"
                          onChange={handleTextChange}
                        />
                      </div>
                    <div className="row-start-2 w-full sm:w-1/2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="item_name"
                        placeholder=""
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
                        name="amount"
                        placeholder="-300 or 300"
                        className="p-2 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md sm:w-1/2"
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
                        name="category"
                        onChange={handleTextChange}
                        placeholder="Income, Taxes, Groceries..."
                        className="p-2 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:w-1/2 text-sm"
                      />
                    </div>

                    <div className="row-start-5">
                      <label
                        htmlFor="from"
                        className="block text-sm font-medium text-gray-700"
                      >
                        From
                      </label>
                      <input
                        type="text"
                        name="from"
                        placeholder="Include any important details"
                        className="w-full p-2 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={handleTextChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-center sm:px-6 sm:text-right">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={handleSubmit}
                  >
                    CREATE NEW ITEM
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

export default TransactionNewForm;