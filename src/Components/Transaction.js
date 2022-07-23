import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
  return (
    <div className=" px-[20%] flex justify-center text-center text-[20px]">
        <span className="basis-1/4 border-b">
            {transaction.date}
        </span>
        <span className="basis-1/4 border-b">
            <Link to={`/transactions/${index}`}>{transaction.item_name}</Link>
        </span>
        <span className="basis-2/4 text-right border-b">
            ${transaction.amount}
        </span>
    </div>
  );
}

export default Transaction;