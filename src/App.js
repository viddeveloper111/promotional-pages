import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import ClientLogos from './components/logo';
import ImpactSection from './components/ImpactSection';
import Footer from './components/Footer';
import FeatureCards from './components/Feature';
import Feature2 from './components/Feature2';
import Feature3 from './components/Feature3';
import HeroSection from './components/HeroSection.jsx';

function App() {
  return (
    <>
      <Navbar/>
      <ClientLogos />
      <ImpactSection />
      <HeroSection />
      <FeatureCards />
      <Feature2 />
      <Feature3 />
            <Footer />
           

    </>
  );
}

export default App;
