import React from 'react';
import ReactDOM from 'react-dom/client'; // Utilisation de ReactDOM.createRoot
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

// Création du root avec ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
  


