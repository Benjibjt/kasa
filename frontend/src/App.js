import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Apartment from './pages/Apartment';


function App() {
  return (
    <Layout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/apartment" element={<Apartment />} />
      </Routes>
    </Layout>
  );
}

export default App;



