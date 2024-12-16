import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PropertiesProvider } from './context/PropertiesProvider'; // Import du fournisseur de contexte
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Apartment from './pages/Apartment';

function App() {
  return (
    <PropertiesProvider> {/* Fournisseur de contexte ici */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Passez un ID pour accéder à un appartement spécifique */}
          <Route path="/apartment/:id" element={<Apartment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </PropertiesProvider>
  );
}

export default App;



