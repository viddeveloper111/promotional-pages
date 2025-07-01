import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Faith from './components/Faith';
import Footer from './components/Footer';
import MembershipPromo from './components/MenbershipPromo';
import TheLatestSection from './components/TheLatestSection';
import FeaturedSection from './components/FeaturedSection';
import DontMissSection from './components/DontMissSection';
import ShowEmUp from './components/ShowEmUp';
import ShopByIconsSection from './components/ShopByIconsSection';


function App() {
  return (
    <div className="App">

      <Header />
      <MembershipPromo />
      <HeroSection />
      <Faith />
      <TheLatestSection />
      <FeaturedSection />
      <DontMissSection />
      <ShowEmUp />
      <ShopByIconsSection />
      <Footer />
      
    </div>
  );
}

export default App;
