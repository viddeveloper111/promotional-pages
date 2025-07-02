import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import CustomersPage from './pages/CustomersPage';

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/customers" element={<CustomersPage />} />
      </Routes>
    </Router>
  );
}
export default App;