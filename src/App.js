import logo from './logo.svg';
import './App.css';
import Attribution from './Attribution';
import Description from './Description';
import Gallery from './Gallery';
import Navbar from './Navbar';
import Quantity from './Quantity';
import CartMenu from './CartMenu';
import { useState } from 'react/cjs/react.development';

function App() {
  // JSON-like object to store the products in the cart
  const [cartProducts, setCartProducts] = useState([
    {
      id: 1,
      name: "Fall Limited Edition Sneakers",
      price: 125.00,
      quantity: 3,
    },
    {
      id: 2,
      name: "Fall Limited Edition Sneakers",
      price: 125.00,
      quantity: 2,
    },
    {
      id: 3,
      name: "Fall Limited Edition Sneakers",
      price: 125.00,
      quantity: 10,
    },
  ]);

  // Delete a product from the cart menu and update the state
  const deleteProduct = (product) => setCartProducts(cartProducts.filter(({ id }) => id !== product));;

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
      <CartMenu cartProducts={ cartProducts } deleteProduct={ deleteProduct } />
      <Attribution />
    </div>
  );
}

export default App;
