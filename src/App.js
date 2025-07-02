
import { Routes, Route } from 'react-router-dom';
import MyntraNavbar from './Components/screens/Navbar';
import HomePage from './Components/screens/HomePage';
import ProductList from './Components/screens/ProductList';
import ProductDetails from './Components/screens/ProductDetails';
import Footer from './Components/screens/Footer';

function App() {
  return (
    <>
      <MyntraNavbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetails />} />

    </Routes>
      <Footer />
    </>
  );
}

export default App;
