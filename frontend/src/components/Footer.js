import React from 'react';

const Footer = ({ className }) => {
  return (
    <footer className={className}> {/* Applique la classe reçue via props */}
      <img src="/assets/LOGO-FOOTER.png" alt="Logo de l'application" className="logo" />
      <p>&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
