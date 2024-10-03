import React from 'react';
 import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" className="logo" />
      <div className="header-right">
        <button className="signin-btn">Sign In</button>
      </div>
    </header>
  );
}

export default Header;
