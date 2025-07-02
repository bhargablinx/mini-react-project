import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-indigo-600">
                Logo
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-6 text-gray-700">
                <Link to="/" className="hover:text-indigo-600">
                    Pricing
                </Link>
                <Link to="/dashboard" className="hover:text-indigo-600">
                    Dashboard
                </Link>
                <Link to="#resources" className="hover:text-indigo-600">
                    Docs
                </Link>
            </div>

            {/* Login Button */}
            <div>
                <Link
                    to="/login"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                >
                    Login
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
