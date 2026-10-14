
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userdetails } from "../context/UserContex";

const Navbar = () => {
  let { user, logout } = useContext(userdetails);
  let navigate = useNavigate();

  let handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between bg-blue-600 px-8 py-4">

      <h2 className="text-2xl font-bold text-white">
        Course Management System
      </h2>

      <div className="flex gap-6">

        <Link to="/" className="text-white font-medium hover:text-yellow-300">
          Course List
        </Link>

        {user?.role === "user" && (
          <Link to="/cart" className="text-white font-medium hover:text-yellow-300">
            Cart
          </Link>
        )}

        {user?.role === "admin" && (
          <Link to="/addcourse" className="text-white font-medium hover:text-yellow-300">
            Add Course
          </Link>
        )}

        {!user ? (
          <>
            <Link to="/login" className="text-white font-medium hover:text-yellow-300">
              Login
            </Link>

            <Link to="/signup" className="text-white font-medium hover:text-yellow-300">
              Signup
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="text-white font-medium hover:text-yellow-300"
          >
            Logout
          </button>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
