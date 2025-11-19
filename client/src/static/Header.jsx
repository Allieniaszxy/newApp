import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 shadow-md relative z-10 bg-white ">
      <div className="font-bold text-black text-2xl max-md:text-xl">L_M_T</div>
      <div className="flex items-center max-md:hidden">
        <Link
          to="/"
          className="text-black mr-4 transition-3s hover:text-blue-400"
        >
          Home
        </Link>
        <Link
          to="/courses"
          className="text-black mr-4 transition-3s hover:text-blue-400"
        >
          Courses
        </Link>
        <Link
          to="/about"
          className="text-black mr-4 transition-3s hover:text-blue-400"
        >
          About
        </Link>
        <Link
          to="/account"
          className="text-black transition-3s hover:text-blue-400"
        >
          Account
        </Link>
      </div>
    </header>
  );
};

export default Header;
