import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.css'; // Import du CSS Module

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>  {/* Applique la classe .layout */}
      <Header className={styles.header} />  {/* Applique la classe .header */}
      <main className={styles.main}>  {/* Applique la classe .main */}
        {children}
      </main>
      <Footer className={styles.footer} />  {/* Applique la classe .footer */}
    </div>
  );
};

export default Layout;
