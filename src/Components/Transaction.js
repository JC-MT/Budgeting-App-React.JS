import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
  return (
    <div className=" px-[20%] flex justify-center text-center text-[20px]">
        <span className="basis-1/4">
            {transaction.date}
        </span>
        <span className="basis-1/4">
            {transaction.item_name}
        </span>
        <span className="basis-2/4 text-right">
            ${transaction.amount}
        </span>
        <hr></hr>
    </div>
  );
}

export default Transaction;