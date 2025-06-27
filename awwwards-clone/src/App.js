import './topheaderr.css';
import './navbar.css';


import Header from './components/topheaderr';
import Navbar from './components/navbar';
import Dropdown from './components/dropdowns';
import Bodym from './components/body';
import Images from './components/bodyimages';
import Fotter from './components/fotter';

import { imageGalleryData } from './data/imagedata';

function App() {
  return (
    <div className="bodybg">
      <div className="headerbg">
        <Header />
      </div>

      <Navbar />

      <div>
        <Dropdown />
      </div>

      <div>
        <Bodym />
      </div>

      <Images data={imageGalleryData} />

      <Fotter />
    </div>
  );
}

export default App;
