import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ className }) => {
  return (
    <header className={className}> {/* Applique la classe reçue via props */}
      <img src="/assets/LOGO.png" alt="Logo de l'application" className="logo" />
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">A Propos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
