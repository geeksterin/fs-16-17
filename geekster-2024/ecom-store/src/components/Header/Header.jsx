import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        MyShop
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-gray-400">
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
