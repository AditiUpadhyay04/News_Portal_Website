import { Link } from "react-router-dom";
import { FaNewspaper } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <FaNewspaper className="text-2xl text-red-600 sm:text-3xl" />
          <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">
            NewsHub
          </h1>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-5 text-sm font-medium text-gray-700 sm:gap-8 sm:text-lg">
          <Link
            to="/"
            className="transition-all duration-300 hover:text-red-600"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="transition-all duration-300 hover:text-red-600"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="transition-all duration-300 hover:text-red-600"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
