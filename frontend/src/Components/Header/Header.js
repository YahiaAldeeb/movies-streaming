import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate for navigation
import './Header.css';

function Header() {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove token from local storage
    navigate("/login"); // Redirect to login page
  };

  const isLoggedIn = !!localStorage.getItem("authToken"); // Check if the user is logged in

  return (
    <header className="header">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          className="logo"
        />
      </Link>
      <div className="header-right">
        {isLoggedIn ? (
          <>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
            <Link to="/AllMovies">
              <button className="signin-btn">All Movies</button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="signin-btn">Sign In</button>
            </Link>
            <Link to="/signup">
              <button className="signin-btn">Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
