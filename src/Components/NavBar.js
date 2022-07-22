import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex justify-around bg-[#60a478] p-4 px-10">
        <Link to="/transactions" className="text-[50px]">Budget App</Link>
        <Link to="/transactions/new" className="p-2 self-center rounded border border-[#9ec5b8] hover:border-[#041f37] shadow-xl text-[15px]">NEW TRANSACTION</Link>
    </nav>
  );
}