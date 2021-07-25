import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header>
      <div className="header__site-name">
        <h1>Rural Tech</h1>
      </div>
      <div className="header__hamburger-button">
        <button>🍔</button>
      </div>
      <div className="header__scrolldown">
        <h4>scroll down</h4>
      </div>
    </header>
  );
}

export default Header;
