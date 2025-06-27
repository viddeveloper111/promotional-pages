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
import Scroller from './components/Scroller.jsx';
import IntroScrollSection from './components/ImpactScrollSection2.jsx';
import S2 from './components/s2.jsx';
import S3 from './components/s3.jsx';
import S4 from './components/s4.jsx';
import S5 from './components/s5.jsx';
import EmailCompatibilitySection from './components/mail.jsx';
import S6 from './components/s6.jsx';
import S7 from './components/s7.jsx';
import S8 from './components/s8.jsx';
import S9 from './components/s9.jsx';
import S10 from './components/s10.jsx';
import S11 from './components/s11.jsx';

function App() {
  return (
    <>
      <Navbar/>
      <ClientLogos />
      <ImpactSection />
      <HeroSection />
      <EmailCompatibilitySection />
      <Scroller />
      <IntroScrollSection />
     <S2 />
     <S3 />
     <S4 />
     <S5 />
     

      <FeatureCards />
      <Feature2 />
      <Feature3 />
      <S6 />
      <S7 />
      <S8 />
      <S9 />
      <S10 />
      <S11 />
            <Footer />
           

    </>
  );
}

export default App;
