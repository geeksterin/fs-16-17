import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const {
    authState: { isAuthenticated },
    authInstance
  } = useContext(AuthContext);

  return (
    <header className="bg-white shadow sticky top-0">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">My Blog</Link>
        </div>
        <nav className="space-x-4">
          {isAuthenticated && (
            <Link to="/post" className="text-gray-800 hover:text-gray-600">
              Add post
            </Link>
          )}
          {isAuthenticated && (
            <Link to="/profile" className="text-gray-800 hover:text-gray-600">
              Profile
            </Link>
          )}
          {isAuthenticated ? (
            <button
              className="px-4 py-2 border-2 border-red-800 rounded-md hover:bg-red-800 hover:text-white"
              onClick={() => signOut(authInstance)}
            >
              Signout
            </button>
          ) : (
            <Link to="/auth" className="text-gray-800 hover:text-gray-600">
              Owner? Login here
            </Link>
          )}
          {/* <a href="/about" className="text-gray-800 hover:text-gray-600">
            About
          </a>
          <a href="/blog" className="text-gray-800 hover:text-gray-600">
            Blog
          </a>
          <a href="/contact" className="text-gray-800 hover:text-gray-600">
            Contact
          </a> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
