import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Importation de useLocation
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  const [activeLink, setActiveLink] = useState("/"); // Déclare activeLink pour gérer l'état du lien actif
  const location = useLocation(); // Utilisation de useLocation pour obtenir la route actuelle

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  useEffect(() => {
    // Vérifier si la page actuelle est Home ou About
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
      // Enlever la classe activeLink de tous les liens
      link.classList.remove(styles.activeLink);

      if (location.pathname === "/") {
        // Si la page est "Home", souligner le lien "Home"
        if (link.getAttribute("href") === "/") {
          link.classList.add(styles.activeLink);
        }
      } else if (location.pathname === "/about") {
        // Si la page est "About", souligner le lien "About"
        if (link.getAttribute("href") === "/about") {
          link.classList.add(styles.activeLink);
        }
      }
    });
  }, [location]); // Réexécuter l'effet chaque fois que location change

  return (
    <div className={styles.layout}>
      <Header
        className={styles.header}
        activeLink={activeLink}
        onLinkClick={handleLinkClick}
      />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};

export default Layout;





