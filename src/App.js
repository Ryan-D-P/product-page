import logo from './logo.svg';
import './App.css';
import Attribution from './Attribution';
import Description from './Description';
import Gallery from './Gallery';
import Navbar from './Navbar';
import Quantity from './Quantity';
import CartMenu from './CartMenu';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="container__column1">
          <Gallery />
        </div>
        <div className="container__column2">
          <Description />
          <Quantity />
        </div>
      </div>

      <CartMenu />

      <Attribution />
    </div>
  );
}

export default App;
