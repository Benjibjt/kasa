import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  useEffect(() => {
    const handleGlobalClick = (event) => {
      // Vérifie si l'élément cliqué est un bouton ou un lien
      if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON') {
        return;
      }

      const elements = document.querySelectorAll('a, button');
      elements.forEach((el) => {
        el.classList.add(styles.flashAnimation);
        setTimeout(() => el.classList.remove(styles.flashAnimation), 500);
      });
    };

    document.addEventListener('click', handleGlobalClick);

    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <div className={styles.layout}>
      <Header
        className={styles.header}
        activeLink={activeLink}
        onLinkClick={handleLinkClick}
      />
      <main className={styles.main}>
        {children}
      </main>
      <Footer className={styles.footer} />
    </div>
  );
};

export default Layout;


