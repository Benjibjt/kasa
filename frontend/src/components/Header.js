import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Layout.module.css';

const Header = ({ className, activeLink, onLinkClick }) => {
  return (
    <header className={className}>
      <img src="/assets/LOGO.svg" alt="Logo de l'application" className={styles.logo} />
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className={activeLink === "/" ? styles.activeLink : ""}
              onClick={() => onLinkClick("/")}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={activeLink === "/about" ? styles.activeLink : ""}
              onClick={() => onLinkClick("/about")}
            >
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

