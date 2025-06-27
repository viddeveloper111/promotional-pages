import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects'
import Footer from './components/Footer';   

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light font-inter">
      <Header />
      <main className="flex-grow-1">
       <Projects/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
