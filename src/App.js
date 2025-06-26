import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Faith from './components/Faith';
import Footer from './components/Footer';
import ProductGrid from './components/ProductGrid';
import MembershipPromo from './components/MenbershipPromo';
import TheLatestSection from './components/TheLatestSection';

function App() {
  return (
    <div className="App">

      <Header />
      <MembershipPromo />
      <HeroSection />
      <Faith />
      <TheLatestSection />
      <ProductGrid />
      <Footer />
      
    </div>
  );
}

export default App;
