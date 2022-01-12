import logo from './logo.svg';
import './App.css';
import Attribution from './Attribution';
import Description from './Description';
import Gallery from './Gallery';
import Navbar from './Navbar';
import Quantity from './Quantity';
import { useState } from 'react/cjs/react.development';

function App() {
  // Manages the currently selected product quantity state (user input)
  const [currentQuantity, setCurrentQuantity] = useState(0);

  const updateQuantity = (value) => setCurrentQuantity(value);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="container__column1">
          <Gallery />
        </div>
        <div className="container__column2">
          <Description />
          <Quantity currentQuantity={ currentQuantity } updateQuantity={ updateQuantity } />
        </div>
      </div>
      <Attribution />
    </div>
  );
}

export default App;
