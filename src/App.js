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
  const [cartProducts, setCartProducts] = useState([]);
  // Delete a product from the cart menu and update the state
  const deleteProduct = (product) => setCartProducts(cartProducts.filter(({ id }) => id !== product));
  // Manage the state for the id of a new product
  const [id, setId] = useState(0);
  // Add a product to the cart when a user clicks the 'Add to cart' button
  const addProduct = () => {
    setId(id + 1);

    cartProducts.push({
      id,
      name: "Fall Limited Edition Sneakers",
      price: 125.00,
      quantity: currentQuantity,
    });

    setCartProducts(cartProducts);
    setCurrentQuantity(0);
  }
  
  // Manages the currently selected product quantity state (user input)
  const [currentQuantity, setCurrentQuantity] = useState(0);
  const updateQuantity = (value) => setCurrentQuantity(value);

  // State to manage whether cart menu is active
  const [isActive, setIsActive] = useState("inactive");
  const openCartMenu = () => setIsActive("active");
  const closeCartMenu = () => setIsActive("inactive");

  return (
    <div className="App">
      <Navbar openCartMenu={ openCartMenu } cartProducts={ cartProducts } />
      <div className="container" onClick={ closeCartMenu }>
        <div className="container__column1">
          <Gallery />
        </div>
        <div className="container__column2">
          <Description />
          <Quantity currentQuantity={ currentQuantity } updateQuantity={ updateQuantity } addProduct={ addProduct } />
        </div>
      </div>
      <CartMenu cartProducts={ cartProducts } deleteProduct={ deleteProduct } isActive={ isActive } />
      <Attribution />
    </div>
  );
}

export default App;
