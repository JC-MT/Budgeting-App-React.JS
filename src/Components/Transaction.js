import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
  return (
    <div className="px-[5%] flex place-content-between text-center text-[20px] sm:text-[25px] sm:px-[20%] ">
        <span className="basis-1/3 sm:basis-1/4 border-b">
            {transaction.date.split("-").reverse().join("/")}
        </span>
        <span className="basis-1/3 border-b hover:bg-lime-50 hover:underline sm:basis-1/4">
            <Link to={`/transactions/${index}`}>{transaction.item_name}</Link>
        </span>
        <span className="basis-1/3 text-right border-b sm:basis-2/4">
            ${transaction.amount}
        </span>
    </div>
  );
}

export default Transaction;