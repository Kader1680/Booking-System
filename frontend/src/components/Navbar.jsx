import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdminRole, setIsAdminRole] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser).data;
      if (user?.role === "admin") {
        setIsAdminRole(true);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  const NavLinks = () => (
    <>
      <Link to="/" className="hover:text-indigo-600">Home</Link>
      <Link to="/rooms" className="hover:text-indigo-600">Bookings</Link>

      {isAdminRole && isAuthenticated && (
        <Link to="/admin/analytics" className="hover:text-indigo-600">
          Dashboard
        </Link>
      )}

      {isAuthenticated ? (
        <>
          <Link to="/profile" className="hover:text-indigo-600">Profile</Link>
          <button onClick={handleLogout} className="hover:text-red-600">Logout</button>
        </>
      ) : (
        <Link to="/login" className="hover:text-indigo-600">Login</Link>
      )}
    </>
  );

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-indigo-600">Atypikhouse</Link>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
            <NavLinks />
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center text-gray-700 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium text-gray-700">
          <NavLinks />
        </div>
      )}
    </header>
  );
}
