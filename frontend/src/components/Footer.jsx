import React from 'react';

const Footer = ({ className }) => {
  return (
    <footer className={className}> {/* Applique la classe reçue via props */}
      <p>&copy; Kasa</p>
    </footer>
  );
};

export default Footer;
