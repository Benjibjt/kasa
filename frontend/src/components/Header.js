import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ className }) => {
  return (
    <header className={className}> {/* Applique la classe reçue via props */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
